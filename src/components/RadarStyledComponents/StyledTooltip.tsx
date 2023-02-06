import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/system";

export const KeyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: "white",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    fontFamily: "bebas-neue-pro, sans-serif",
    borderRadius: 0,
    padding: 15,
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
  },
});

export const RadarTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: "white",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "bebas-neue-pro, sans-serif",
    borderRadius: 0,
  },
});

export const CategoryRadarTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: "white",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    marginRight: 15,
    fontFamily: "bebas-neue-pro, sans-serif",
    borderRadius: 0,
  },
});
