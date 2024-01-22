import { ReactElement } from "react";

type Question = {
  q: string;
  a: ReactElement;
};

const questions: Question[] = [
  {
    q: "Is this course capped?",
    a: <>Yes. For Spring 2024 the course will be capped to 100 students. If you would like to join the class, please request an override code on C@B and fill out <a href="">this form to join the waitlist</a>. Students will be admitted into the course during the first week of classes.</>,
  },
  {
    q: "IS THERE A WAITLIST FOR THE COURSE?",
    a: <>Yes. You can <a href="">find the waitlist here</a>. After the first week of class we will admit people off the waitlist who have an open override request in C@B and who have the course in their cart on C@B. Note that because the course is capped we may not be able to admit everyone off the waitlist.</>,
  },
  {
    q: "ARE THERE PREREQUISITES FOR THE COURSE?",
    a: <>This course requires completion of one of the intro CS sequences (CS19 or CS20) as well as CS32 (Intro to Software Engineering). You may request an override for the prerequisites by sending a link to a github repository of work you did demonstrating use of object-oriented programming, data structures, and functional programming concepts. If you are on the waitlist, then include the link there in the question field that asks for it. Graduate students that have taken courses that cover these topics should note that on the waitlist form.</>,
  },
  {
    q: "WILL THIS COURSE BE ONLINE OR IN-PERSON?",
    a: <>In-person. Lectures will be live and studios will be in person. Students that must miss a day of class can ask to Zoom in or request a recording of that day of class by contacting Talie or Vanessa.</>,
  },
  {
    q: "WHAT WILL STUDIOS BE LIKE?",
    a: <>The studio lab hours will be outside regular lecture hours. Each assignment will have a corresponding studio, where you will cover relevant topics or do work on the assignment. TAs will have an activity prepared for students in studio, and will be around to give feedback to students during this time.</>,
  },
  {
    q: "CAN I TAKE THIS COURSE AS A NON-CS CONCENTRATOR OR INCOMING FIRST-YEAR STUDENT?",
    a: <>Usually there is a separate course, CS 0130, which is designed for non-concentrators and has no prerequistes. This year we are only offering CS 1300, but you may still enroll in CS 1300 if you satisfy the pre-reqs even as a non-CS concentrator.</>,
  },
  {
    q: "CAN I TAKE THIS COURSE AS A RISD STUDENT?",
    a: <>This year we are not offering CS 0130 so RISD students should meet the same prerequisites as Brown students to take CS 1300.</>,
  },
  {
    q: "I WILL MISS CLASS ON [DATE]. CAN I BE EXCUSED?",
    a: <>We do not take class attendance, but there will be in-class activities that require hand-in during lecture. Each student can miss up to five (5) of these activity points with no consequence. If you anticipate missing more than five classes, contact the course instructors.</>,
  },
  {
    q: "CAN I TAKE THE COURSE AS A CAPSTONE?",
    a: <>Yes, for a capstone, you should extend an assignment into something that has substantial development and design components and release it. For instance, you could take your Iterative Design prototype and build it fully to the point where it's a deployable app. This can be done as a group, but the amount of work should be proportional to the group size. Both juniors and seniors may take CS 1300 for a capstone. Only the online capstone form needs to be filled out, which you should already have received via email from the department earlier in September. The capstone can be done anytime in the semester, up until final grading is due.</>,
  },
  {
    q: "WILL THERE BE A TEXTBOOK FOR THE COURSE?",
    a: <>No, all readings will be available on this website.</>,
  },
  {
    q: "WILL THERE BE A FINAL EXAM?",
    a: <>No, you will complete a portfolio for your final assignment.</>,
  },
];

export {questions}
