import "./Footer.css";
import Icon from "./../ui/Icon";
import LinksGroup from "./LinksGroup";
import links from "../utils/footerLinks";

function Footer() {
  const { paymentMethods, joinUs, socialAccounts, Help, trade, moreInfo } =
    links;
  return (
    <div className="footer">
      <div className="division">
        <LinksGroup links={joinUs.links} title={joinUs.title} />
        <LinksGroup icons={socialAccounts.icons} title={socialAccounts.title} />
      </div>
      <div className="division">
        <LinksGroup links={moreInfo.links} title={moreInfo.title} />
      </div>
      <div className="division">
        <LinksGroup links={trade.links} title={trade.title} />
        <LinksGroup links={Help.links} title={Help.title} />
      </div>
      <div className="division">
        <LinksGroup icons={paymentMethods.icons} title={paymentMethods.title} />
      </div>
      <div className="division subscribe">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          architecto facere! Temporibus placeat magni officiis ad tempore.
          Impedit harum facere dolorem? Quae atque sunt nulla tempore, quibusdam
          quidem impedit quam.
        </p>
        <div className="sub-form">
          <form action="" method="get">
            <input type="email" name="" id="" />
            <button type="submit">SUBSCRIBE</button>
            <Icon iconName={"envelope"} extra={"email-icon"} />
          </form>
        </div>
      </div>
      <small className="copyright"><b>&copy; Muwanguzi Joseph {new Date().getFullYear()}</b></small>
    </div>
  );
}

export default Footer;
