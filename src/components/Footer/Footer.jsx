import { footerLinks } from '../../utils/data';

function Footer() {
  return (
    <footer>
      <div className="section-container">
        <div className="flex items-start gap-8 lg:flex-row flex-col">
          <div className="flex-1 lg:text-right text-center">
            <img
              src="/assets/images/enjaz-logo.svg"
              alt="Enjaz logo"
              className="max-w-[85px] max-lg:mx-auto"
            />
            <p className=" max-w-[100%] text-[#626563] my-4 text-lg font-semibold ">
              تطبيق يسهل علي الأفراد امكانية مبايعة المركبات آلياً وذلك بعد فحص
              المركبة فنياً والاتفاق علي سعر وحدوث تراضي بين كل من الطرفين{' '}
            </p>

            <div className="flex items-center gap-x-2 lg:justify-start justify-center">
              <img src="/assets/icons/Inastagram.svg" alt="inastagram" />
              <img src="/assets/icons/Whatsapp.svg" alt="Whatssap" />
              <img src="/assets/icons/Facebook.svg" alt="Facebook" />
              <img src="/assets/icons/X.svg" alt="X" />
            </div>
          </div>

          {footerLinks.map((item) => {
            const { id, title, links } = item;

            return (
              <div key={id} className="flex-1 text-center lg:mx-0 mx-auto">
                <h6 className="text-[#1BAC4B] text-xl font-bold mb-4">
                  {title}
                </h6>
                <ul className="flex flex-col gap-y-2">
                  {links?.map((link) => {
                    const { id, text, path } = link;
                    return (
                      <li key={id}>
                        <a className="text-black font-semibold" href={path}>
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
