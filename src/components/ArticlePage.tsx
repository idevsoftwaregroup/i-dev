import { useEffect, useRef } from "react";

export default function ArticlePage({
  article,
  open,
  close
}: any) {

  const dialogRef = useRef<HTMLDialogElement>(null);


  useEffect(() => {

    const dialog = dialogRef.current;

    if (!dialog) return;


    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }

  }, [open]);



  return (
    <dialog ref={dialogRef} className="max">

      <div className="padding large">

        <header className="row">

          <h4 className="max small">
            {article?.title}
          </h4>


          <button
            className="circle transparent"
            onClick={close}
          >
            <i className="large">
            arrow_back_ios_new
            </i>
          </button>

        </header>


        <div className="large-space"></div>


        <img
          className="responsive round padding"
          src={article?.image}
          alt={article?.title}
        />



        <div dir="rtl" className="padding">

          {/*<h5>
            {article?.title}
          </h5>*/}


          <p>
            {article?.text}
          </p>


          <p>
            محتوای کامل مقاله اینجا نمایش داده می‌شود.
          </p>

        </div>



        <button
          className="border round red4 white-text"
          onClick={close}
        >
          <i>close</i>
          بستن
        </button>


      </div>


    </dialog>
  );
}
