const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "././jsonlogs",
  reportPath: "././reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "XX",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Prueba de Cypress con Cucumber y generación de reportes" },
      { label: "Release", value: "XX" },
      { label: "Cycle", value: "XX" },
      { label: "Execution Start Time", value: "XX" },
      { label: "Execution End Time", value: "XX" },
    ],
  },
});