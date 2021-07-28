import Navigation from "../components/Navigation";
import Twits from "../components/Twits";

export default function ProfilePage() {
  return (
    <div className="main-page">
      <section className="main-page_item">
        <Navigation type="light" />
      </section>
      <div className="main-page_item main-page_wrapper">
        <section className="main-page_top-block">UserInfo Component</section>
        <section className="main-page_twits">
          <Twits />
        </section>
      </div>
    </div>
  );
}
