// function renderLicenseSection(license) {
//   if (license === 'No license') {
//     return "";
//   } else {
//     return `
//   ## License

//   This software has been created under the [${license}](${renderLicenseLink(license)}) license.

//   * [Return to Top](#Description)
//   `;
//   }
// }

// describe("renderLicenseSection", () => {
//   const license = "MIT";
//   // expect(license).toBeInstanceOf(typeof(String()));
//   it("should take a string and print a new string with license link", () => {
//     const license = "MIT";
//     const ouput = `## License
    
//    This software has been created under the [${license}](${renderLicenseLink(license)}) license.

//    * [Return to Top](#Description)`
    
//     expect(output).stringContaining(license)
//   })
// })

describe("renderLicenseBadge", () => {
  const license = "MIT";
})