import { t } from "@lingui/macro";
import { Button, SwipeableDrawer, Typography, useTheme, withStyles, useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import { useWeb3Context } from "src/hooks/web3Context";
import InitialWalletView from "./InitialWalletView";
import "./style.scss";

const WalletButton = ({ openWallet }: { openWallet: () => void }) => {
  const { connect, connected, address } = useWeb3Context();
  const onClick = connected ? openWallet : connect;
  const label = connected ? address.slice(0, 6) + "..." + address.slice(-6) : t`Connect Wallet`;
  const theme = useTheme();
  return (
    <Button id="ohm-menu-button" variant="contained" color="secondary" onClick={onClick}>
      <Typography>{label}</Typography>
    </Button>
  );
};

const StyledSwipeableDrawer = withStyles(theme => ({
  root: {
    width: "460px",
    maxWidth: "100%",
  },
  paper: {
    maxWidth: "100%",
  },
}))(SwipeableDrawer);

export function Wallet() {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const closeWallet = () => setWalletOpen(false);
  const openWallet = () => setWalletOpen(true);

  // only enable backdrop transition on ios devices,
  // because we can assume IOS is hosted on hight-end devices and will not drop frames
  // also disable discovery on IOS, because of it's 'swipe to go back' feat
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  return (
    <>
      <WalletButton openWallet={openWallet} />
      <StyledSwipeableDrawer
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
        anchor={isSmallScreen || isVerySmallScreen ? "top" : "right"}
        open={isWalletOpen}
        onOpen={openWallet}
        onClose={closeWallet}
      >
        <InitialWalletView onClose={closeWallet} />
      </StyledSwipeableDrawer>
    </>
  );
}

export default Wallet;
