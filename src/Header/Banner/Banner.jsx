import './Banner.css'
import BannerLeftSection from "./BannerLeftSection/BannerLeftSection";
import BannerRightSection from "./BannerRightSection/BannerRightSection";

function Banner() {
    return(
        <section className="main_header">
<BannerLeftSection></BannerLeftSection>
<BannerRightSection></BannerRightSection>
        </section>
    )
}
export default Banner