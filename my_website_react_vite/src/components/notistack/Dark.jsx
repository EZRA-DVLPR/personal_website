import { forwardRef } from "react";
import { styled } from "@mui/system";
import { SnackbarContent } from "notistack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const Root = styled(SnackbarContent)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    minWidth: '344px !important',
  },
}));

const CustomCard = styled(Card)({
  width: '288px', //pretty close to the default notification size
  height: '50px',
  backgroundColor: '#154c79', //color of the notification
});

const CustomTypography = styled(Typography)({
  color: '#000', //color of the text
});

const ActionRoot = styled(CardActions)({
  padding: '8px 8px 8px 16px', //padding to keep text away from box extemeties
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '48px', //centers text within the box
});


const DarkNotification = forwardRef(({ id, ...props }, ref) => (
    <Root ref={ref}>
      <CustomCard>
        <ActionRoot>
          <CustomTypography variant="body2">
            {props.message}
          </CustomTypography>
        </ActionRoot>
      </CustomCard>
    </Root>
  ));

  DarkNotification.displayName = "ReportComplete";

export default DarkNotification;
