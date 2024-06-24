function Hero() {
  return (
    <section className="bg-[#9ff2bb33] pt-[100px] min-h-[90dvh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto flex items-center lg:justify-between justify-center lg:flex-row flex-col ">
        <div className="flex-1 lg:text-right text-center">
          <h1 className="text-4xl font-bold">
            نقل ملكية المركبات آلياً <br /> أسهل مع
            <span className="text-[#1BAC4B]"> إنجاز</span>
          </h1>
          <p className="lg:mx-0 mx-auto text-[#626563] mt-8 mb-12 text-lg font-semibold max-w-[65%]">
            وذلك بعد معاينة المشتري للمركبة المطلوبة وتحديد الثمن مع البائع
            تقديم ما يثبت شخصية المالك الجديد للمركبة وصفته ومحل إقامته وتقديم
            كل المستندات الخاصة بالمركبة التي تم معاينتها من قبل
          </p>

          <div className="flex items-center lg:justify-start justify-center gap-6">
            <a href="/">
              <img src="/assets/images/google-play.png" alt="google paly" />
            </a>

            <a href="/">
              <img src="/assets/images/apple-store.png" alt="apple store" />
            </a>
          </div>
        </div>

        <div className="flex-1" style={{ position: "relative" }}>
          <img
            src="/assets/New folder/Untitled-2.png"
            alt="hero section image"
            className="max-w-full"
            style={{ width: "650px" }}
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
