const TmpRentarCard = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="h-28 px-4 py-3 bg-white border-b border-[#8e8e93] flex-col flex justify-start items-start gap-1 overflow-hidden"
      onClick={onClick}
    >
      <div className="self-stretch text-black text-[17px] font-['SF Pro'] leading-snug">
        가게명
      </div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <svg
            width="209"
            height="18"
            viewBox="0 0 209 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 13.6667H3.33333V6.33332H12.6667M10.6667 1.66666V2.99999H5.33333V1.66666H4V2.99999H3.33333C2.59333 2.99999 2 3.59332 2 4.33332V13.6667C2 14.0203 2.14048 14.3594 2.39052 14.6095C2.64057 14.8595 2.97971 15 3.33333 15H12.6667C13.0203 15 13.3594 14.8595 13.6095 14.6095C13.8595 14.3594 14 14.0203 14 13.6667V4.33332C14 3.9797 13.8595 3.64056 13.6095 3.39051C13.3594 3.14047 13.0203 2.99999 12.6667 2.99999H12V1.66666M11.3333 8.99999H8V12.3333H11.3333V8.99999Z"
              fill="#2E2E2E"
            />
            <path
              d="M21.022 14V13.2129L24.1196 9.86133C24.509 9.43815 24.8136 9.08903 25.0337 8.81396C25.2537 8.53467 25.4082 8.28288 25.4971 8.05859C25.5859 7.83431 25.6304 7.58887 25.6304 7.32227V7.30957C25.6304 6.98796 25.5605 6.7002 25.4209 6.44629C25.2812 6.19238 25.0824 5.99137 24.8242 5.84326C24.5661 5.69515 24.2572 5.62109 23.8975 5.62109C23.5335 5.62109 23.214 5.69727 22.939 5.84961C22.6639 5.99772 22.4502 6.20719 22.2979 6.47803C22.1455 6.74463 22.0693 7.05778 22.0693 7.41748L22.063 7.43018L20.9712 7.42383L20.9585 7.41748C20.9627 6.87581 21.0939 6.39551 21.3521 5.97656C21.6102 5.55339 21.9657 5.22331 22.4185 4.98633C22.8713 4.74512 23.3896 4.62451 23.9736 4.62451C24.5068 4.62451 24.9871 4.73665 25.4146 4.96094C25.842 5.18099 26.1784 5.48356 26.4238 5.86865C26.6735 6.25374 26.7983 6.69385 26.7983 7.18896V7.20166C26.7983 7.54867 26.737 7.88298 26.6143 8.20459C26.4958 8.5262 26.2842 8.88379 25.9795 9.27734C25.6748 9.66667 25.2453 10.147 24.6909 10.7183L22.3232 13.1621L22.6089 12.6353V13.1621L22.3296 12.9717H26.9507V14H21.022ZM31.8536 14.2158C31.1765 14.2158 30.5968 14.0212 30.1143 13.6318C29.6361 13.2425 29.268 12.6903 29.0098 11.9751C28.7517 11.2557 28.6226 10.4051 28.6226 9.42334V9.41064C28.6226 8.42887 28.7517 7.5804 29.0098 6.86523C29.268 6.15007 29.6361 5.59782 30.1143 5.2085C30.5968 4.81917 31.1765 4.62451 31.8536 4.62451C32.5307 4.62451 33.1104 4.81917 33.5929 5.2085C34.0753 5.59782 34.4456 6.15007 34.7037 6.86523C34.9661 7.5804 35.0972 8.42887 35.0972 9.41064V9.42334C35.0972 10.4051 34.9661 11.2557 34.7037 11.9751C34.4456 12.6903 34.0753 13.2425 33.5929 13.6318C33.1104 14.0212 32.5307 14.2158 31.8536 14.2158ZM31.8536 13.2192C32.2937 13.2192 32.6682 13.0648 32.9771 12.7559C33.2903 12.4469 33.5294 12.009 33.6944 11.4419C33.8637 10.8748 33.9483 10.202 33.9483 9.42334V9.41064C33.9483 8.632 33.8637 7.96126 33.6944 7.39844C33.5294 6.83138 33.2903 6.39551 32.9771 6.09082C32.6682 5.7819 32.2937 5.62744 31.8536 5.62744C31.4177 5.62744 31.0432 5.7819 30.7301 6.09082C30.4211 6.39551 30.1842 6.83138 30.0191 7.39844C29.8541 7.96126 29.7716 8.632 29.7716 9.41064V9.42334C29.7716 10.202 29.8541 10.8748 30.0191 11.4419C30.1842 12.009 30.4211 12.4469 30.7301 12.7559C31.0432 13.0648 31.4177 13.2192 31.8536 13.2192ZM36.8962 14V13.2129L39.9938 9.86133C40.3831 9.43815 40.6878 9.08903 40.9079 8.81396C41.1279 8.53467 41.2824 8.28288 41.3713 8.05859C41.4601 7.83431 41.5046 7.58887 41.5046 7.32227V7.30957C41.5046 6.98796 41.4347 6.7002 41.2951 6.44629C41.1554 6.19238 40.9565 5.99137 40.6984 5.84326C40.4403 5.69515 40.1313 5.62109 39.7716 5.62109C39.4077 5.62109 39.0882 5.69727 38.8131 5.84961C38.5381 5.99772 38.3244 6.20719 38.172 6.47803C38.0197 6.74463 37.9435 7.05778 37.9435 7.41748L37.9372 7.43018L36.8454 7.42383L36.8327 7.41748C36.8369 6.87581 36.9681 6.39551 37.2262 5.97656C37.4844 5.55339 37.8398 5.22331 38.2926 4.98633C38.7454 4.74512 39.2638 4.62451 39.8478 4.62451C40.381 4.62451 40.8613 4.73665 41.2887 4.96094C41.7161 5.18099 42.0526 5.48356 42.298 5.86865C42.5477 6.25374 42.6725 6.69385 42.6725 7.18896V7.20166C42.6725 7.54867 42.6112 7.88298 42.4884 8.20459C42.3699 8.5262 42.1584 8.88379 41.8537 9.27734C41.549 9.66667 41.1195 10.147 40.5651 10.7183L38.1974 13.1621L38.4831 12.6353V13.1621L38.2038 12.9717H42.8249V14H36.8962ZM48.6545 14V12.1021H44.1921V11.061C44.4418 10.6463 44.6957 10.2274 44.9538 9.8042C45.212 9.37679 45.4722 8.9515 45.7346 8.52832C46.0012 8.10091 46.2678 7.67773 46.5344 7.25879C46.801 6.83984 47.0655 6.42725 47.3279 6.021C47.5945 5.61475 47.8568 5.22119 48.115 4.84033H49.7717V11.0801H51.073V12.1021H49.7717V14H48.6545ZM45.3601 11.0864H48.6609V5.90039H48.5847C48.3774 6.20931 48.1658 6.53092 47.9499 6.86523C47.7341 7.19531 47.5141 7.53385 47.2898 7.88086C47.0697 8.22786 46.8497 8.57699 46.6296 8.92822C46.4096 9.27946 46.1916 9.6307 45.9758 9.98193C45.7642 10.3289 45.559 10.6717 45.3601 11.0103V11.0864ZM60.9657 3.262H62.0447V11.972H60.9657V3.262ZM57.6507 4.796H61.3687V5.667H57.6507V4.796ZM54.5307 13.87H62.3567V14.754H54.5307V13.87ZM54.5307 11.218H55.6097V14.273H54.5307V11.218ZM53.0617 4.12H54.1407V9.658H53.0617V4.12ZM53.0617 9.32H53.9457C55.6227 9.32 57.1957 9.229 59.0287 8.904L59.1327 9.801C57.2477 10.139 55.6747 10.217 53.9457 10.217H53.0617V9.32ZM57.6507 7.032H61.3687V7.916H57.6507V7.032ZM70.4536 14V6.10986H70.352L68.0224 7.79834V6.59229L70.4599 4.84033H71.5962V14H70.4536ZM74.1631 14V13.2129L77.2608 9.86133C77.6501 9.43815 77.9548 9.08903 78.1749 8.81396C78.3949 8.53467 78.5494 8.28288 78.6382 8.05859C78.7271 7.83431 78.7715 7.58887 78.7715 7.32227V7.30957C78.7715 6.98796 78.7017 6.7002 78.5621 6.44629C78.4224 6.19238 78.2235 5.99137 77.9654 5.84326C77.7073 5.69515 77.3983 5.62109 77.0386 5.62109C76.6747 5.62109 76.3552 5.69727 76.0801 5.84961C75.8051 5.99772 75.5914 6.20719 75.439 6.47803C75.2867 6.74463 75.2105 7.05778 75.2105 7.41748L75.2042 7.43018L74.1124 7.42383L74.0997 7.41748C74.1039 6.87581 74.2351 6.39551 74.4932 5.97656C74.7514 5.55339 75.1068 5.22331 75.5596 4.98633C76.0124 4.74512 76.5308 4.62451 77.1148 4.62451C77.648 4.62451 78.1283 4.73665 78.5557 4.96094C78.9831 5.18099 79.3196 5.48356 79.565 5.86865C79.8147 6.25374 79.9395 6.69385 79.9395 7.18896V7.20166C79.9395 7.54867 79.8781 7.88298 79.7554 8.20459C79.6369 8.5262 79.4254 8.88379 79.1207 9.27734C78.816 9.66667 78.3865 10.147 77.8321 10.7183L75.4644 13.1621L75.7501 12.6353V13.1621L75.4708 12.9717H80.0919V14H74.1631ZM84.7029 8.124H85.7819V10.217H84.7029V8.124ZM90.0979 3.262H91.1769V10.178H90.0979V3.262ZM81.6479 8.488L81.5179 7.682C83.7799 7.682 86.6529 7.669 89.1619 7.383L89.2269 8.085C86.6529 8.462 83.8449 8.488 81.6479 8.488ZM83.2989 10.607H91.1769V13.051H84.3779V14.377H83.3249V12.336H90.1109V11.387H83.2989V10.607ZM83.3249 14.104H91.5669V14.884H83.3249V14.104ZM87.7579 8.852H90.4359V9.554H87.7579V8.852ZM85.3139 3.483C87.0559 3.483 88.1999 4.159 88.1999 5.251C88.1999 6.343 87.0559 7.019 85.3139 7.019C83.5589 7.019 82.4149 6.343 82.4149 5.251C82.4149 4.159 83.5589 3.483 85.3139 3.483ZM85.3139 4.237C84.1569 4.237 83.4159 4.627 83.4159 5.251C83.4159 5.875 84.1569 6.265 85.3139 6.265C86.4449 6.265 87.1859 5.875 87.1859 5.251C87.1859 4.627 86.4449 4.237 85.3139 4.237ZM97.3841 14V13.2129L100.482 9.86133C100.871 9.43815 101.176 9.08903 101.396 8.81396C101.616 8.53467 101.77 8.28288 101.859 8.05859C101.948 7.83431 101.992 7.58887 101.992 7.32227V7.30957C101.992 6.98796 101.923 6.7002 101.783 6.44629C101.643 6.19238 101.444 5.99137 101.186 5.84326C100.928 5.69515 100.619 5.62109 100.26 5.62109C99.8956 5.62109 99.5761 5.69727 99.3011 5.84961C99.026 5.99772 98.8123 6.20719 98.66 6.47803C98.5076 6.74463 98.4314 7.05778 98.4314 7.41748L98.4251 7.43018L97.3333 7.42383L97.3206 7.41748C97.3248 6.87581 97.456 6.39551 97.7142 5.97656C97.9723 5.55339 98.3278 5.22331 98.7806 4.98633C99.2334 4.74512 99.7518 4.62451 100.336 4.62451C100.869 4.62451 101.349 4.73665 101.777 4.96094C102.204 5.18099 102.54 5.48356 102.786 5.86865C103.036 6.25374 103.16 6.69385 103.16 7.18896V7.20166C103.16 7.54867 103.099 7.88298 102.976 8.20459C102.858 8.5262 102.646 8.88379 102.342 9.27734C102.037 9.66667 101.607 10.147 101.053 10.7183L98.6853 13.1621L98.971 12.6353V13.1621L98.6917 12.9717H103.313V14H97.3841ZM108.216 14.2158C107.539 14.2158 106.959 14.0212 106.476 13.6318C105.998 13.2425 105.63 12.6903 105.372 11.9751C105.114 11.2557 104.985 10.4051 104.985 9.42334V9.41064C104.985 8.42887 105.114 7.5804 105.372 6.86523C105.63 6.15007 105.998 5.59782 106.476 5.2085C106.959 4.81917 107.539 4.62451 108.216 4.62451C108.893 4.62451 109.473 4.81917 109.955 5.2085C110.437 5.59782 110.808 6.15007 111.066 6.86523C111.328 7.5804 111.459 8.42887 111.459 9.41064V9.42334C111.459 10.4051 111.328 11.2557 111.066 11.9751C110.808 12.6903 110.437 13.2425 109.955 13.6318C109.473 14.0212 108.893 14.2158 108.216 14.2158ZM108.216 13.2192C108.656 13.2192 109.03 13.0648 109.339 12.7559C109.652 12.4469 109.891 12.009 110.057 11.4419C110.226 10.8748 110.31 10.202 110.31 9.42334V9.41064C110.31 8.632 110.226 7.96126 110.057 7.39844C109.891 6.83138 109.652 6.39551 109.339 6.09082C109.03 5.7819 108.656 5.62744 108.216 5.62744C107.78 5.62744 107.405 5.7819 107.092 6.09082C106.783 6.39551 106.546 6.83138 106.381 7.39844C106.216 7.96126 106.134 8.632 106.134 9.41064V9.42334C106.134 10.202 106.216 10.8748 106.381 11.4419C106.546 12.009 106.783 12.4469 107.092 12.7559C107.405 13.0648 107.78 13.2192 108.216 13.2192ZM116.175 3.691C117.93 3.691 119.217 4.757 119.217 6.304C119.217 7.838 117.93 8.904 116.175 8.904C114.433 8.904 113.146 7.838 113.146 6.304C113.146 4.757 114.433 3.691 116.175 3.691ZM116.175 4.575C115.044 4.575 114.186 5.29 114.186 6.304C114.186 7.318 115.044 8.02 116.175 8.02C117.319 8.02 118.164 7.318 118.164 6.304C118.164 5.29 117.319 4.575 116.175 4.575ZM121.427 3.262H122.519V9.281H121.427V3.262ZM114.914 9.853H122.519V12.713H115.993V14.481H114.94V11.907H121.453V10.724H114.914V9.853ZM114.94 14H122.909V14.858H114.94V14ZM127.454 16.2852C127.044 15.7393 126.705 15.1595 126.439 14.5459C126.172 13.9323 125.973 13.2785 125.842 12.5845C125.715 11.8905 125.651 11.1499 125.651 10.3628C125.651 9.57568 125.715 8.83724 125.842 8.14746C125.969 7.45345 126.166 6.79964 126.432 6.18604C126.699 5.5682 127.039 4.98633 127.454 4.44043H128.381C128.152 4.73242 127.939 5.10059 127.74 5.54492C127.545 5.98926 127.376 6.48014 127.232 7.01758C127.088 7.55078 126.976 8.10514 126.896 8.68066C126.815 9.25195 126.775 9.81266 126.775 10.3628C126.775 10.9172 126.815 11.4821 126.896 12.0576C126.976 12.6289 127.088 13.1833 127.232 13.7207C127.376 14.2539 127.545 14.7406 127.74 15.1807C127.939 15.625 128.152 15.9932 128.381 16.2852H127.454ZM131.001 3.873H138.567V4.757H131.001V3.873ZM129.649 8.202H140.296V9.086H129.649V8.202ZM137.865 3.873H138.918V4.744C138.918 5.745 138.918 6.889 138.528 8.514L137.475 8.462C137.865 6.85 137.865 5.719 137.865 4.744V3.873ZM130.949 10.685H138.957V14.858H130.949V10.685ZM137.904 11.543H132.002V13.987H137.904V11.543ZM142.503 16.2852H141.576C141.805 15.9932 142.016 15.625 142.211 15.1807C142.41 14.7406 142.581 14.2539 142.725 13.7207C142.869 13.1833 142.981 12.6289 143.062 12.0576C143.142 11.4821 143.182 10.9172 143.182 10.3628C143.182 9.81266 143.142 9.25195 143.062 8.68066C142.981 8.10514 142.869 7.55078 142.725 7.01758C142.581 6.48014 142.41 5.98926 142.211 5.54492C142.016 5.10059 141.805 4.73242 141.576 4.44043H142.503C142.918 4.98633 143.258 5.5682 143.525 6.18604C143.792 6.79964 143.988 7.45345 144.115 8.14746C144.242 8.83724 144.306 9.57568 144.306 10.3628C144.306 11.1499 144.24 11.8905 144.109 12.5845C143.982 13.2785 143.785 13.9323 143.519 14.5459C143.256 15.1595 142.918 15.7393 142.503 16.2852ZM150.36 14V13.2129L153.458 9.86133C153.847 9.43815 154.152 9.08903 154.372 8.81396C154.592 8.53467 154.746 8.28288 154.835 8.05859C154.924 7.83431 154.969 7.58887 154.969 7.32227V7.30957C154.969 6.98796 154.899 6.7002 154.759 6.44629C154.619 6.19238 154.421 5.99137 154.162 5.84326C153.904 5.69515 153.595 5.62109 153.236 5.62109C152.872 5.62109 152.552 5.69727 152.277 5.84961C152.002 5.99772 151.788 6.20719 151.636 6.47803C151.484 6.74463 151.408 7.05778 151.408 7.41748L151.401 7.43018L150.309 7.42383L150.297 7.41748C150.301 6.87581 150.432 6.39551 150.69 5.97656C150.948 5.55339 151.304 5.22331 151.757 4.98633C152.209 4.74512 152.728 4.62451 153.312 4.62451C153.845 4.62451 154.325 4.73665 154.753 4.96094C155.18 5.18099 155.517 5.48356 155.762 5.86865C156.012 6.25374 156.137 6.69385 156.137 7.18896V7.20166C156.137 7.54867 156.075 7.88298 155.952 8.20459C155.834 8.5262 155.622 8.88379 155.318 9.27734C155.013 9.66667 154.584 10.147 154.029 10.7183L151.661 13.1621L151.947 12.6353V13.1621L151.668 12.9717H156.289V14H150.36ZM161.192 14.2158C160.515 14.2158 159.935 14.0212 159.453 13.6318C158.974 13.2425 158.606 12.6903 158.348 11.9751C158.09 11.2557 157.961 10.4051 157.961 9.42334V9.41064C157.961 8.42887 158.09 7.5804 158.348 6.86523C158.606 6.15007 158.974 5.59782 159.453 5.2085C159.935 4.81917 160.515 4.62451 161.192 4.62451C161.869 4.62451 162.449 4.81917 162.931 5.2085C163.414 5.59782 163.784 6.15007 164.042 6.86523C164.304 7.5804 164.435 8.42887 164.435 9.41064V9.42334C164.435 10.4051 164.304 11.2557 164.042 11.9751C163.784 12.6903 163.414 13.2425 162.931 13.6318C162.449 14.0212 161.869 14.2158 161.192 14.2158ZM161.192 13.2192C161.632 13.2192 162.006 13.0648 162.315 12.7559C162.629 12.4469 162.868 12.009 163.033 11.4419C163.202 10.8748 163.287 10.202 163.287 9.42334V9.41064C163.287 8.632 163.202 7.96126 163.033 7.39844C162.868 6.83138 162.629 6.39551 162.315 6.09082C162.006 5.7819 161.632 5.62744 161.192 5.62744C160.756 5.62744 160.381 5.7819 160.068 6.09082C159.759 6.39551 159.522 6.83138 159.357 7.39844C159.192 7.96126 159.11 8.632 159.11 9.41064V9.42334C159.11 10.202 159.192 10.8748 159.357 11.4419C159.522 12.009 159.759 12.4469 160.068 12.7559C160.381 13.0648 160.756 13.2192 161.192 13.2192ZM168.956 4.276H169.84V6.382C169.84 9.086 168.384 11.595 166.46 12.57L165.797 11.686C167.539 10.854 168.956 8.605 168.956 6.382V4.276ZM169.138 4.276H170.022V6.382C170.022 8.527 171.426 10.685 173.168 11.491L172.518 12.349C170.607 11.413 169.138 8.995 169.138 6.382V4.276ZM174.39 3.249H175.469V15.027H174.39V3.249ZM184.806 14.1523C184.176 14.1523 183.626 14.0444 183.156 13.8286C182.686 13.6128 182.314 13.3166 182.039 12.9399C181.768 12.5633 181.611 12.1338 181.569 11.6514L181.563 11.5752H182.661L182.667 11.6387C182.697 11.9391 182.803 12.2036 182.985 12.4321C183.171 12.6606 183.418 12.8405 183.727 12.9717C184.04 13.0986 184.4 13.1621 184.806 13.1621C185.208 13.1621 185.56 13.0923 185.86 12.9526C186.165 12.813 186.402 12.6204 186.571 12.375C186.74 12.1253 186.825 11.8397 186.825 11.5181V11.5054C186.825 10.9425 186.637 10.5109 186.26 10.2104C185.888 9.90576 185.38 9.75342 184.737 9.75342H183.588V8.78857H184.686C185.05 8.78857 185.371 8.72087 185.651 8.58545C185.93 8.4458 186.148 8.25749 186.304 8.02051C186.461 7.7793 186.539 7.50635 186.539 7.20166V7.18896C186.539 6.86735 186.472 6.5944 186.336 6.37012C186.201 6.14583 186.002 5.97445 185.739 5.85596C185.481 5.73747 185.166 5.67822 184.794 5.67822C184.434 5.67822 184.112 5.73958 183.829 5.8623C183.549 5.98079 183.325 6.15218 183.156 6.37646C182.987 6.60075 182.885 6.86735 182.851 7.17627L182.845 7.23975H181.747L181.753 7.17627C181.804 6.67692 181.96 6.24105 182.223 5.86865C182.489 5.49626 182.841 5.20638 183.277 4.99902C183.717 4.79167 184.222 4.68799 184.794 4.68799C185.378 4.68799 185.885 4.78955 186.317 4.99268C186.753 5.19157 187.089 5.46875 187.326 5.82422C187.568 6.17546 187.688 6.58382 187.688 7.04932V7.06201C187.688 7.43864 187.606 7.77295 187.441 8.06494C187.276 8.35693 187.047 8.60026 186.755 8.79492C186.463 8.98958 186.127 9.12712 185.746 9.20752V9.23291C186.414 9.28792 186.954 9.51432 187.364 9.91211C187.779 10.3057 187.987 10.8283 187.987 11.48V11.4927C187.987 12.0005 187.849 12.4554 187.574 12.8574C187.299 13.2594 186.922 13.5768 186.444 13.8096C185.966 14.0381 185.42 14.1523 184.806 14.1523ZM192.826 14.2158C192.149 14.2158 191.569 14.0212 191.087 13.6318C190.608 13.2425 190.24 12.6903 189.982 11.9751C189.724 11.2557 189.595 10.4051 189.595 9.42334V9.41064C189.595 8.42887 189.724 7.5804 189.982 6.86523C190.24 6.15007 190.608 5.59782 191.087 5.2085C191.569 4.81917 192.149 4.62451 192.826 4.62451C193.503 4.62451 194.083 4.81917 194.565 5.2085C195.048 5.59782 195.418 6.15007 195.676 6.86523C195.938 7.5804 196.07 8.42887 196.07 9.41064V9.42334C196.07 10.4051 195.938 11.2557 195.676 11.9751C195.418 12.6903 195.048 13.2425 194.565 13.6318C194.083 14.0212 193.503 14.2158 192.826 14.2158ZM192.826 13.2192C193.266 13.2192 193.641 13.0648 193.949 12.7559C194.263 12.4469 194.502 12.009 194.667 11.4419C194.836 10.8748 194.921 10.202 194.921 9.42334V9.41064C194.921 8.632 194.836 7.96126 194.667 7.39844C194.502 6.83138 194.263 6.39551 193.949 6.09082C193.641 5.7819 193.266 5.62744 192.826 5.62744C192.39 5.62744 192.016 5.7819 191.702 6.09082C191.393 6.39551 191.157 6.83138 190.991 7.39844C190.826 7.96126 190.744 8.632 190.744 9.41064V9.42334C190.744 10.202 190.826 10.8748 190.991 11.4419C191.157 12.009 191.393 12.4469 191.702 12.7559C192.016 13.0648 192.39 13.2192 192.826 13.2192ZM197.484 9.463H208.131V10.347H197.484V9.463ZM202.346 9.905H203.425V12.609H202.346V9.905ZM198.836 13.87H206.948V14.754H198.836V13.87ZM198.836 11.569H199.902V14.208H198.836V11.569ZM198.901 3.626H199.967V5.121H205.648V3.626H206.727V8.332H198.901V3.626ZM199.967 5.966V7.461H205.648V5.966H199.967Z"
              fill="#2E2E2E"
            />
          </svg>
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          2024년 12월 20일(금) 20시 30분
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33331C9.10667 3.33331 10 4.22665 10 5.33331C10 6.43998 9.10667 7.33331 8 7.33331C6.89333 7.33331 6 6.43998 6 5.33331C6 4.22665 6.89333 3.33331 8 3.33331Z"
              fill="#2E2E2E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99967 3.99999C7.2612 3.99999 6.66634 4.59485 6.66634 5.33332C6.66634 6.0718 7.2612 6.66666 7.99967 6.66666C8.73815 6.66666 9.33301 6.0718 9.33301 5.33332C9.33301 4.59485 8.73815 3.99999 7.99967 3.99999ZM5.33301 5.33332C5.33301 3.85847 6.52482 2.66666 7.99967 2.66666C9.47453 2.66666 10.6663 3.85847 10.6663 5.33332C10.6663 6.80818 9.47453 7.99999 7.99967 7.99999C6.52482 7.99999 5.33301 6.80818 5.33301 5.33332Z"
              fill="#2E2E2E"
            />
            <path
              d="M7.99967 9.33331C10.6663 9.33331 12.6663 10.6666 12.6663 11.3333V12.6666H3.33301V11.3333C3.33301 10.6666 5.33301 9.33331 7.99967 9.33331Z"
              fill="#2E2E2E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.98694 11.4162C3.98689 11.4162 3.98724 11.4153 3.98815 11.4134C3.98744 11.4152 3.98699 11.4162 3.98694 11.4162ZM3.99984 11.3926C4.02185 11.3573 4.06703 11.2988 4.14765 11.2218C4.31694 11.0602 4.5908 10.8665 4.96465 10.6796C5.70905 10.3074 6.774 9.99999 7.99984 9.99999C9.22567 9.99999 10.2906 10.3074 11.035 10.6796C11.4089 10.8665 11.6827 11.0602 11.852 11.2218C11.9326 11.2988 11.9778 11.3573 11.9998 11.3926V12H3.99984V11.3926ZM12.0127 11.4162C12.0127 11.4162 12.0122 11.4152 12.0115 11.4134C12.0124 11.4153 12.0128 11.4162 12.0127 11.4162ZM4.36836 9.48704C5.29062 9.02591 6.55901 8.66666 7.99984 8.66666C9.44067 8.66666 10.7091 9.02591 11.6313 9.48704C12.0908 9.71678 12.4836 9.98143 12.7727 10.2573C12.9171 10.3952 13.0486 10.5482 13.1477 10.7141C13.2439 10.8752 13.3332 11.0882 13.3332 11.3333V12.6667C13.3332 13.0348 13.0347 13.3333 12.6665 13.3333H3.33317C2.96498 13.3333 2.6665 13.0348 2.6665 12.6667V11.3333C2.6665 11.0882 2.75576 10.8752 2.852 10.7141C2.95111 10.5482 3.08261 10.3952 3.22702 10.2573C3.51607 9.98143 3.90887 9.71678 4.36836 9.48704Z"
              fill="#2E2E2E"
            />
          </svg>
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          25
        </div>
      </div>
      <div className="text-[#34c759] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
        확정
      </div>
    </div>
  );
};

export default TmpRentarCard;