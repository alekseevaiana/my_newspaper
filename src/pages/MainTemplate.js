export default function MainTemplate({ loggedIn }) {
  return (
    <div className="main-page">
      <section className="main-page_item">
        <Navigation type="light" loggedIn={loggedIn} />
      </section>
      <div className="main-page_item main-page_wrapper">
        <section className="main-page_top-block">
          {/* <TextInput />  or <UserInfo/> or  */}
          <TextInput />
        </section>
        <section className="main-page_twits">
          <Twit />
        </section>
      </div>
    </div>
  );
}
