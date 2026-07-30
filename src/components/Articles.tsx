
import "swiper/css";

export default function Articles() {
  const slides = [
    {
      title: "آینده معماری نرم افزار",
      text: "بررسی معماری های مدرن، Microservices، Clean Architecture و روش های ساخت نرم افزارهای مقیاس پذیر.",
      icon: "architecture",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      width: "150px",
      backgroundColor: "orange1"
    },
    {
      title: "مهندسی نرم افزار مدرن",
      text: "از Clean Code تا Design Pattern ها؛ اصولی که کیفیت و نگهداری نرم افزار را متحول می کنند.",
      icon: "code",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      width: "150px",
      backgroundColor: "lime1"
    },
    {
      title: "امنیت در چرخه توسعه",
      text: "نگاهی به DevSecOps، امنیت کد، تست های امنیتی و ساخت نرم افزارهای امن.",
      icon: "security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      width: "150px",
      backgroundColor: 'blue1'
    },
    {
      title: "دنیای هوش مصنوعی",
      text: "چگونه AI و تکنولوژی های جدید مسیر توسعه نرم افزار را تغییر می دهند.",
      icon: "psychology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      width: "150px",
      backgroundColor: "deep-purple1"
    },
    {
      title: "Cloud Native و DevOps",
      text: "ساخت، استقرار و مدیریت سیستم های مدرن با Kubernetes، CI/CD و Cloud.",
      icon: "cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      width: "150px",
      backgroundColor: "indigo2"
    },
  ];

  const style = {
    rightAlign: 'rtl',
    leftAlign: 'ltr',
    article: 'transparent padding border round'
  };

  return (
    <div>
      {
        slides.map((item, index) => (
          <article className={`${style.article} ${item.backgroundColor}`} dir={style.rightAlign}>
            <div className="grid no-space ">
              <div className="s3">
                <img className="responsive small bottom round" src={item.image} />
                <div key={index} className="absolute top left right padding white-text">
                  {/*<h5>{item.title}</h5>*/}
                  {/*<p>{ item.text }</p>*/}
                </div>
              </div>
              <div className="s9 no-space">
                <div className="padding">
                  <h5 className="small bold">{item.title}</h5>
                  <p>{ item.text }</p>
                  <nav>
                    <button className="border round">مشاهده مقاله</button>
                  </nav>
                </div>
              </div>
            </div>
          </article>
        ))
      }
  </div>
  );
}
