import Bitcoin from "../../../Icons/bitcoin.svg";
import Bitcoincoin from "../../../Icons/bitcoincoin.svg";
import Cardano from "../../../Icons/cardano.svg";
import DodgeCoin from "../../../Icons/dodgecoin.svg";
import Ethereum from "../../../Icons/ethereum.svg";
import Ethereum2 from "../../../Icons/Ethereum2.svg";
import Tether from "../../../Icons/tether.svg";
import Usd from "../../../Icons/usd.svg";
import Xrp from "../../../Icons/xrp.svg";
import Blankstar from "../../../Icons/blankstar.svg";
import Filledstar from "../../../Icons/filledstar.svg";
import Search from "../../../Icons/search.svg";
interface MuiIconProps {
  icon: string;
  sx?: object;
}
const MuiIcon: React.FC<MuiIconProps> = ({ icon, sx }) => {
  // console.log(icon);
  switch (icon) {
    case "bitcoin":
      return <img style={sx} src={Bitcoin} alt="failed to load" />;
    case "bitcoincoin":
      return <img style={sx} src={Bitcoincoin} alt="failed to load" />;
    case "cardano":
      return <img style={sx} src={Cardano} alt="failed to load" />;
    case "dodgecoin":
      return <img style={sx} src={DodgeCoin} alt="failed to load" />;
    case "ethereum":
      return <img style={sx} src={Ethereum} alt="failed to load" />;
    case "ethereum2":
      return <img style={sx} src={Ethereum2} alt="failed to load" />;
    case "tether":
      return <img style={sx} src={Tether} alt="failed to load" />;
    case "usd":
      return <img style={sx} src={Usd} alt="failed to load" />;
    case "xrp":
      return <img style={sx} src={Xrp} alt="failed to load" />;
    case "blankstar":
      return <img style={sx} src={Blankstar} alt="failed to load" />;
    case "filledstar":
      return <img style={sx} src={Filledstar} alt="failed to load" />;
    case "search":
      return <img style={sx} src={Search} alt="failed to load" />;

    default:
      return <div></div>;
  }
};
export default MuiIcon;
