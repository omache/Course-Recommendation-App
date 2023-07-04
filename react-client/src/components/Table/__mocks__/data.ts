import { TAG_COLOR } from '../../../atoms';
import { TableProps } from '../Table';

export const tableData1: TableProps = {
  columns: ['Subject', 'Predicted Grade', 'Orientation'],
  data: [
    {
      courseId: 'INT3111',
      courseName: 'Software Project Management',
      grade: 9.1,
      orientation: { title: 'E-commerce', color: TAG_COLOR[2] },
    },
    {
      courseId: 'INT3135',
      courseName: 'Mobile Computing',
      grade: 8.5,
      orientation: { title: 'Computer Networks', color: TAG_COLOR[0] },
    },
    {
      courseId: 'INT3404',
      courseName: 'Image Processing',
      grade: 7.5,
      orientation: { title: 'Human-Computer Interaction', color: TAG_COLOR[1] },
    },
    {
      courseId: 'INT3306',
      courseName: 'Web Application Development',
      grade: 7.0,
      orientation: { title: 'E-commerce', color: TAG_COLOR[2] },
    },
    {
      courseId: 'INT3402',
      courseName: 'Compiler Construction',
      grade: 6.4,
      orientation: { title: 'Intelligent Systems', color: TAG_COLOR[3] },
    },
  ],
};

export const tableData2: TableProps = {
  columns: ['Subject', 'Predicted Grade', 'Converted Grade'],
  data: [
    {
      courseId: 'INT3111',
      courseName: 'Software Project Management',
      grade: 9.1,
      gradeConversion: 'A+',
    },
    {
      courseId: 'INT3135',
      courseName: 'Mobile Computing',
      grade: 8.5,
      gradeConversion: 'A',
    },
    {
      courseId: 'INT3404',
      courseName: 'Image Processing',
      grade: 7.5,
      gradeConversion: 'B',
    },
    {
      courseId: 'INT3306',
      courseName: 'Web Application Development',
      grade: 7.0,
      gradeConversion: 'B',
    },
    {
      courseId: 'INT3402',
      courseName: 'Compiler Construction',
      grade: 6.4,
      gradeConversion: 'C',
    },
  ],
};
