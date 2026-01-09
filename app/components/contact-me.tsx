import { Formik, type FormikHelpers } from "formik";
import { Send } from "lucide-react";
import * as yup from "yup";
import AppInput from "./input";
import AppButton from "./button";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required().min(5).max(200),
  });
  const handleSubmitForm = (
    values: { name: string; email: string; message: string },
    formikHelpers: FormikHelpers<ContactFormProps>
  ) => {
    console.log("Residam");
  };

  return (
    <div className="container py-32 mx-auto px-3 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div> */}
      <div className="flex items-center justify-center flex-col">
        <p className="uppercase text-primary text-sm">Get In Touch</p>
        <h2 className="text-4xl font-bold text-primary">
          Let's build
          <span className="font-serif text-white italic"> something great.</span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-3xl text-center mt-4">
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how
          we can work together.
        </p>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row mt-16">
        <div className="glass p-8 rounded-3xl border border-primary/30 flex-1">
          <Formik<ContactFormProps>
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
            initialValues={{ email: "", message: "", name: "" }}>
            {({ handleChange, handleSubmit, values, errors }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <AppInput
                  title="Name"
                  placeholder="Your Name..."
                  error={errors.name}
                  inputProps={{
                    name: "name",
                    onChange: handleChange,
                  }}
                />

                <AppInput
                  title="Email"
                  error={errors.email}
                  placeholder="Your Email..."
                  inputProps={{
                    name: "email",
                    onChange: handleChange,
                  }}
                />
                <AppInput
                  title="Message"
                  error={errors.message}
                  placeholder="Your Message..."
                  inputProps={{
                    name: "message",
                    onChange: handleChange,
                    style: { minHeight: "200px" },
                  }}
                />
                <AppButton buttonElements={{ type: "submit" }}>
                  {/* <button buttonElements={{ type: "submit" }}> */}
                  <div className="flex items-center gap-2">
                    <p>Submit Message</p>
                    <Send size={20} />
                  </div>
                </AppButton>
              </form>
            )}
          </Formik>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="glass p-8 rounded-3xl border border-primary/30 flex-1"></div>
          <div className="glass p-8 rounded-3xl border border-primary/30 flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
