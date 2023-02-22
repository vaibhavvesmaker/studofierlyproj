const Admin = artifacts.require("Admin");
const Skills = artifacts.require("Skills");
const Employee = artifacts.require("Employee");
const OrganizationEndorser = artifacts.require("OrganizationEndorser");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Admin);
  const admin = await Admin.deployed();
  await deployer.deploy(Skills);
  const skills = await Skills.deployed();
//   await deployer.deploy(Employee, admin.address, Employee.address, "test", "test", "test");
//   await deployer.deploy(OrganizationEndorser, admin.address, Employee.address, "test1", "test1", "test1");
  console.log(admin.address, skills.address);
};