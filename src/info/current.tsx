type CurrentAssignment = {
  title: string;
  released: string;
  due: string;
  handoutLink: string | null;
  handinLink: string | null;
};

type CurrentStudio = {
  title: string;
  due: string;
  handoutLink: string | null;
  handinLink: string | null;
};

type Reading = {
  title: string;
  link: string;
};

const currAssignment: CurrentAssignment = {
    title: "Responsive Redesign",
    released: "TBA",
    due: "TBA",
    handoutLink: null,
    handinLink: null
}

const currStudio: CurrentStudio = {
    title: "HTML/CSS",
    due: "TBA",
    handoutLink: null,
    handinLink: null
}

const readings: Reading[] = [
  {
    title: "Syllabus",
    link: "/",
  },
  {
    title: "Affordances",
    link: "/",
  },
];

export {currAssignment, currStudio, readings}
