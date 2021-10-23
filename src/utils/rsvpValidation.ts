import * as yup from "yup";

const requiredText = "Obligatorio";

export const RsvpValidation = yup.object({
  "name-lastName": yup.string().required(requiredText),
  "group-size": yup.number().required(),
  "group-type": yup.string().required(requiredText),
  rsvp: yup.string().required(requiredText),
  "arriving-date": yup.mixed().when("rsvp", {
    is: "yes",
    then: yup.date().required(requiredText).typeError(requiredText),
  }),
  "leaving-date": yup.mixed().when(["rsvp", "group-type"], {
    is: (rsvp, groupType) => rsvp === "yes" && groupType !== "chile-chico",
    then: yup
      .date()
      .required(requiredText)
      .typeError(requiredText)
      .min(
        yup.ref("arriving-date"),
        "La fecha de regreso es después a la de llegada"
      ),
  }),

  "has-tickets": yup.boolean().when(["rsvp", "group-type"], {
    is: (rsvp, groupType) => rsvp === "yes" && groupType !== "chile-chico",
    then: yup.boolean().required(requiredText),
  }),
  "has-hotel": yup.boolean().when(["rsvp", "group-type"], {
    is: (rsvp, groupType) => rsvp === "yes" && groupType !== "chile-chico",
    then: yup.boolean().required(requiredText),
  }),
  "hotel-name": yup.string().when(["rsvp", "has-hotel", "group-type"], {
    is: (rsvp, hasHotel, groupType) =>
      rsvp === "yes" && hasHotel && groupType !== "chile-chico",
    then: yup.string().required(requiredText),
  }),
  code: yup.string(),
});
