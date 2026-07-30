import Banner from "../components/Banner";


export default function Home() {

    return (

        <section>

            <div className="field label border borderInput round large grey3">

                <input type="text" />

                <label>
                    جستجو کن
                </label>

                <i className="large">
                    search
                </i>

            </div>


            <div className="large-space"></div>


            <Banner />


        </section>

    );
}
