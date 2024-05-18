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
  backgroundColor: '#fddc6c', //color of the notification
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


const ReportComplete = forwardRef(({ id, ...props }, ref) => (
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

ReportComplete.displayName = "ReportComplete";

export default ReportComplete;
