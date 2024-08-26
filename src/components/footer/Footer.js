import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Component() {
  return (
    <Footer container className="bg-gray-900 text-white">
      <Footer.Divider className="border-gray-700" />
      <div className="w-full sm:flex sm:flex-col sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by="Abdiaziz Saman™"
          year={2023}
          className="text-white-400"
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="https://twitter.com/a_azizla" icon={BsTwitter} />
          <Footer.Icon href="https://github.com/SamanAbdiaziz" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
}

export default Component;
