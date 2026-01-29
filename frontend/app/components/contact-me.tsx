import { Formik, type FormikHelpers } from "formik";
import { Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import AppButton from "./button";
import ConfirmationModal from "./confirmation_modal";
import AppInput from "./input";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required().min(5).max(200),
  });

  const handleSubmitForm = (
    values: { name: string; email: string; message: string },
    formikHelpers: FormikHelpers<ContactFormProps>,
  ) => {
    setConfirmationModal(true);
  };

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast("Copy Successfully", { type: "success" });
  };

  return (
    <>
      <div className="container py-32 mx-auto px-3 relative overflow-hidden">
        <div className="flex items-center justify-center flex-col">
          <p className="uppercase text-primary text-sm">Get In Touch</p>
          <h2 className="text-4xl font-bold text-primary">
            Let's build
            <span className="font-serif text-white italic"> something great.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-3xl text-center mt-4">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss
            how we can work together.
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
            <div className="glass p-8 rounded-3xl border border-primary/30 flex-1">
              <p className="text-2xl">Contact Information</p>
              <div className="flex flex-col gap-8 mt-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    action: "mailto",
                    value: "r.ghahremani1991@gmail.com",
                  },
                  { title: "Phone", value: "+1 (647) 674 - 7807", icon: Phone, action: "tel" },
                  {
                    icon: MapPin,
                    disabled: true,
                    title: "Location",
                    value: "Toronto, Canada",
                  },
                ].map((item, index) => (
                  <div key={item.title + index} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                      <a href={`${item.action}:${item.value}`}>
                        <item.icon className="text-primary" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-.5">
                      <p className="text-muted-foreground">{item.title}</p>
                      <div className="flex gap-2 items-center">
                        <a href={`${item.action}:${item.value}`}>
                          <p
                            className={`text-lg ${!item.disabled && "hover:border-b hover:text-primary cursor-pointer duration-200"}`}>
                            {item.value}
                          </p>
                        </a>
                        <div className="flex items-center justify-center">
                          {/* <div className="flex items-center justify-center bg-primary/10 p-1 rounded"> */}
                          {!item.disabled && (
                            <Copy
                              size={14}
                              className="text-primary cursor-pointer"
                              onClick={() => handleCopy(item.value)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="glass p-8 rounded-3xl  border border-primary/30 flex-1"></div> */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects. Whether you need a
                full-time engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal
        open={confirmationModal}
        onClose={() => {
          setConfirmationModal(false);
        }}
        title="Thank you for contacting us"
        message="We have successfully received your message. Our team will review your request and get back
            to you as soon as possible."
      />
    </>
  );
};

export default ContactMe;
