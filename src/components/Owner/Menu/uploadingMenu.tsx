import { useOwnerContext } from '../../../context/OwnerContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostMenu, GetMenu, DeleteMenu } from 'shared/api/menu';
import Button from 'shared/ui/Button/button';
import Icon from 'shared/ui/Icon/Icon';

interface MenuItem {
  menuId: number;
  imageUrl: string;
}

const UploadingMenu = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<MenuItem[]>([]);
  const navigate = useNavigate();
  const { ownerId: venueId } = useOwnerContext();

  useEffect(() => {
    const fetchMenuImages = async () => {
      try {
        const data = await GetMenu(venueId);
        setUploadedImages(data.result.menuImageList);
      } catch (error) {
        console.error('이미지 목록 불러오기 실패', error);
      }
    };

    fetchMenuImages();
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append(`imageUrl`, image);
      });
      await PostMenu(venueId, formData);
      alert('메뉴가 변경되었습니다.');
      navigate(-1);
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생', error);
    }
  };

  const handleDelete = async (menuId: number) => {
    try {
      await DeleteMenu(venueId, menuId);
      setUploadedImages((prevImages) =>
        prevImages.filter((item) => item.menuId !== menuId)
      );
    } catch (error) {
      console.error('이미지 삭제 실패', error);
    }
  };

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mx-6 mt-[72px]">
        <label
          htmlFor="image-upload"
          className="w-[169px] h-[169px] flex-shrink-0 rounded-xl bg-[rgba(203,96,21,0.40)] flex justify-center items-center cursor-pointer"
        >
          <Icon name="plus" size={64} />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="hidden"
        />
        {uploadedImages.map((item, menuId) => (
          <div
            key={`uploaded-${menuId}`}
            className="flex justify-center min-w-[169px] min-h-[169px] overflow-hidden relative"
          >
            <img
              src={item.imageUrl}
              alt={`Uploaded ${menuId}`}
              className="w-full h-auto rounded"
            />
            <button
              className="absolute right-1 top-1 flex w-6 h-6 p-1 justify-center items-center flex-shrink-0 rounded-[1000px] bg-white"
              type="button"
              onClick={async () => await handleDelete(item.menuId)}
            >
              <Icon name="delete" />
            </button>
          </div>
        ))}
        {images.map((image, index) => (
          <div
            key={`new-${index}`}
            className="flex justify-center min-w-[169px] min-h-[169px] overflow-hidden"
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`New Upload ${index}`}
              className="w-full h-auto rounded"
            />
          </div>
        ))}
      </div>

      <div className="w-[356px] absolute bottom-[41px] mx-6">
        <Button size="large" colorType="filled" type="submit">
          수정 완료
        </Button>
      </div>
    </form>
  );
};

export default UploadingMenu;
