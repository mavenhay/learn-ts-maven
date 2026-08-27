/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */
let name="Fajar Hidayat", gpa=3.86, income=4200000, ccount=4, disciplinary=false,dcomplete=true,passMsg:string;

if(gpa>=3.75&&income<5000000) passMsg=ccount>=3&&!disciplinary&&dcomplete?"Scholarship Approved":"Passed First Screening, but Failed Second Screening";
else passMsg="Scholarship Not Approved";

console.log(`
===== Scholarship Result =====
Student Name: ${name}
GPA: ${gpa}
Family Income: ${income}
Competition Count: ${ccount}
Has Disciplinary Record? ${disciplinary?"Yes":"No"}
Documents Complete? ${dcomplete}
Result: ${passMsg}
`);