import Image from 'next/image';
import { Image as DatoImage } from 'react-datocms';

const CTABlock = ({ title, subtitle, buttonLabel, buttonHex, image }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-50 sm:flex-row md:h-80 lg:ml-0 lg:w-full">
          <div className="w-2/5">
            <Image className="h-full w-full object-cover" src={image} alt="" />
          </div>

          <div className="flex w-full flex-col p-4 text-center sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-l mb-4 font-bold text-gray-800 md:text-xl lg:text-2xl">
              {title}
            </h2>

            <p className="text-m mb-8 max-w-md text-gray-600">{subtitle}</p>

            <div className="mt-auto">
              <div
                className={`hover:cursor-pointer rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white md:text-base`}
              >
                {buttonLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABlock;