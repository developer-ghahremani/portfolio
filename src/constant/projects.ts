import ProjectModel from "models/Project";

const projects: ProjectModel[] = [
  {
    id: 1,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: { en: "Zuperi App (Client side)", fa: "اپلیکیشن سمت مشتری زوپری" },
    from: new Date(2018, 8, 23),
    to: new Date(2019, 4, 21),
    companyId: 1,
    description: {
      en: "The user can view and order supermarket products. After registering the order, the supermarket owner will be notified of the order through his / her application and will send the order to him / her.",
      fa: "کاربر امکان مشاهده و سفارش محصولات سوپرمارکتی را دارد. پس از ثبت سفارش، سوپرمارکت دار از طریق اپلیکیشن مربوط به خود از سفارش آگاه شده و سفارش را برای وی ارسال می کند",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 2,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: {
      en: "Zuperi App (SuperMarket side)",
      fa: "اپلیکیشن سمت سوپرمارکت دار زوپری",
    },
    from: new Date(2019, 4, 21),
    to: new Date(2019, 11, 22),
    companyId: 1,

    description: {
      en: "Android programming of Zupri online supermarket application (supermarket and support side)",
      fa: "",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 3,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: {
      en: "Besha App",
      fa: "اپلیکیشن بهسا",
    },
    from: new Date(2019, 11, 22),
    to: new Date(2020, 3, 19),
    companyId: 2,

    description: {
      en: "Development of Android application Improving building information based on postal code (Behsa) Employer Iran Post Company",
      fa: "ساخت اپلیکیشن اندروید بهسازی اطلاعات ساختمان ها بر اساس کد پستی(بهسا) کارفرما شرکت پست ایران",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 4,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: {
      en: "Maya App",
      fa: "اپلیکیشن مایا پخش",
    },
    from: new Date(2020, 1, 21),
    to: new Date(2020, 3, 19),
    companyId: 3,

    description: {
      en: "",
      fa: "کدنویسی بخش اندروید اپلیکیشن مایا پخش(فروشگاه آنلاین محصولات آرایشی بهداشتی)",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 5,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: {
      en: "Driver App",
      fa: "اپلیکیشن رانندگان",
    },
    from: new Date(2020, 3, 10),
    to: new Date(2020, 4, 30),
    companyId: 3,

    description: {
      en: "",
      fa: "ساخت اپلیکیشن اندروید سمت راننده یکی از شرکت های حمل و نقل مسافر (از ذکر نام شرکت به خاطر وجود قرارداد محرمانگی معذورم)",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 6,
    jobTitle: { en: "Android Developer", fa: "توسعه دهنده اندروید" },
    title: {
      en: "Book App",
      fa: "اپلیکیشن کتاب صوتی (به نام کتاب)",
    },
    from: new Date(2020, 5, 1),
    to: new Date(2020, 5, 20),
    companyId: 3,

    description: {
      en: "",
      fa: "مشارکت در ساخت یک اپلیکیشن کتاب صوتی(پیاده سازی سرویس پخش موسیقی)",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 7,
    jobTitle: {
      en: "Front End Developer (React Js)",
      fa: "برنامه نویس فرانت اند",
    },
    title: {
      en: "Ratin Ads",
      fa: "سایت مدیریت توسعه دهندگان راتین",
    },
    from: new Date(2020, 7, 22),
    to: new Date(2021, 1, 20),
    companyId: 4,
    description: {
      en: "Implement the front section of the ads.ratin.agency site to establish a constructive interaction between advertisers and application developers.",
      fa: "پیاده سازی بخش فرانت مربوط سایت ads.ratin.agency جهت برقراری تعامل سازنده بین تبلیغ دهندگان و توسعه دهندگان اپلیکیشن ها.",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 8,
    jobTitle: {
      en: "Front End Developer (React Js)",
      fa: "برنامه نویس فرانت اند",
    },
    title: {
      en: "Ratin Crm",
      fa: "سایت مدیریت مشتریان راتین",
    },
    from: new Date(2021, 1, 20),
    to: new Date(2021, 3, 19),
    companyId: 4,

    description: {
      en: "Implementation of front site crm.ratin.agency, Ratin's product for managing and monitoring corporate customers. It is possible to create a product, create a task, add a vendor, create an invoice and a pre-invoice for each panel.",
      fa: "پیاده سازی فرانت سایت crm.ratin.aagency ، محصول شرکت راتین برای مدیریت و رصد کردن مشتریان شرکت ها. امکان ساخت محصول، ساخت تسک، افزودن فروشنده، ساخت فاکتور و پیش فاکتور برای هر پنل امکان پذیر است.",
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 9,
    jobTitle: {
      en: "Front End Developer (React Js)",
      fa: "برنامه نویس فرانت اند",
    },
    title: {
      en: "Houshiz",
      fa: "بازی سوال و جوابی هوشیز",
    },
    from: new Date(2021, 1, 20),
    to: new Date(2021, 4, 21),
    companyId: 3,

    description: {
      en: "",
      fa: "به صورت فریلنسر روی پروژه بازی سوال و جوابی کار می کنم.(فرآیند بازی، مثل بازیTrivia Crack 2 است.) در این پروژه از سوکت استفاده کردم و تمامی طراحی های متناسب با یک بازی را پیاده سازی نمودم. هدف پروژه، استفاده برای کاربر IOS است.",
    },
    images: [{ image: "", title: "" }],
  },
  // {
  //   id: 10,
  //   jobTitle: {
  //     en: "Mobile Developer (React Native)",
  //     fa: "برنامه نویس سمت موبایل (ری اکت نیتیو)",
  //   },
  //   title: {
  //     en: "Bilimob",
  //     fa: "اپلیکیشن بیلیموب",
  //   },
  //   from: new Date(2021, 1, 20),
  //   to: new Date(2021, 4, 21),
  //   companyId: 5,
  //
  //   description: { en: "", fa: "" },
  //   images: [{ image: "", title: "" }],
  // },
  {
    id: 11,
    jobTitle: {
      en: "Mobile Developer (React Native)",
      fa: "برنامه نویس سمت موبایل (ری اکت نیتیو)",
    },
    title: {
      en: "Mirorim",
      fa: "اپلیکیشن میروریم",
    },
    from: new Date(2021, 4, 21),
    to: new Date(2022, 3, 20),
    companyId: 6,

    description: {
      en: "A user task management project with the following capabilities:For each registered task, you will be able to chat about that task. Each task can have checklists, attached files, and assigned users. In this program, the user can record how he feels about his audience, and also see how others feel about him.",
      fa: `پروژه مدیریت کننده تسک های کاربران با قابلیت های زیر:
    برای هر تسک ثبت شده، امکان چت در مورد آن تسک مهیا خواهد شد.
    هر تسک می تواند دارای چک لیست، فایل های attach شده و کاربران assign شده باشد.
    کاربر در این برنامه می تواند احساس خود به مخاطبینش را ثبت کند، و احساسات دیگران به خود را نیز مشاهده نماید.`,
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 12,
    jobTitle: {
      en: "Front End Developer (Next JS)",
      fa: "برنامه نویس فرانت اند",
    },
    title: {
      en: "Peteman",
      fa: "سایت پت من",
    },
    from: new Date(2021, 4, 21),
    to: new Date(2022, 3, 20),
    companyId: 6,

    description: {
      en: "Peteman store site developed with next js",
      fa: `مشاهده مقالات در حوزه نگهداری و سلامت حیوانات خانگی با قابلیت مشاهده محصولات پت شاپ های ثبت نام شده. اپلیکیشن با قابلیت امکان ویزیت آنلاین، چت با دام پزشک و فروشگاه محصولات حیوانات خانگی در حال پیاده سازی می باشد.`,
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 13,
    jobTitle: {
      en: "Mobile Developer (React Native)",
      fa: "برنامه نویس سمت موبایل (ری اکت نیتیو)",
    },
    title: {
      en: "Mirorup",
      fa: "اپلیکیشن میرورآپ",
    },
    from: new Date(2021, 4, 21),
    to: new Date(2022, 3, 20),
    companyId: 6,

    description: {
      en: "Mirrorup application. A combination of book application and social space. The space is such that the user can comment on any paragraph he reads. Comments are shared among the audience friends and the user can discuss each paragraph of each book with his friends.",
      fa: `ترکیبی از اپکیلیشن کتاب و فضای اجتماعی. فضا به گونه ای است که کاربر امکان اظهار نظر در مورد هر پاراگرافی که می خواند را دارد. نظرات بین دوستان مخاطب به اشتراک گذاشته می شود و کاربر می تواند در مورد هر پاراگراف هر کتاب، با دوستان خود به گفت و گو بپردازد`,
    },
    images: [{ image: "", title: "" }],
  },
  {
    id: 14,
    jobTitle: {
      en: "Front End Developer (React Js)",
      fa: "برنامه نویس فرانت اند",
    },
    title: {
      en: "Baje 724",
      fa: "سایت باجه 724",
    },
    from: new Date(2021, 8, 23),
    // to: new Date(),
    companyId: 7,

    description: {
      en: "",
      fa: `مدیریت اطلاعات پرسنلی جهاد نصر کرمان
    شامل اطلاعات پرسنلی افراد، نمایش اطلاعات بیمه ای، نمایش لیست ماشین آلات هلدینگ، سیستم ساخت اتوماتیک تسک ها، بازرسی در راستای استاندارد های HSE افراد و ثبت آن در سامانه`,
    },
    images: [{ image: "", title: "" }],
  },
];

export default projects;
