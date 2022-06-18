using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace VTS_Management.Models
{
    [MetadataType(typeof(EmployeesMetadata))]
    public partial class Employee
    {
    }
    public class EmployeesMetadata
    {
        [Display(Name ="ID")]
        
        public int EmployeeId { get; set; }

        [Required]
        [Display(Name = "Employee")]
        public string EmployeeName { get; set; }

        [Required]
        [Display(Name = "Phone")]
        public string EmployeePhone { get; set; }

        [Required]
        [Display(Name = "Address")]
        public string EmployeeAddress { get; set; }

        [Required]
        [Display(Name = "Email")]
        public string EmployeeEmail { get; set; }

        [Required]
        [Display(Name = "Salary")]
        public Nullable<double> EmployeeSalary { get; set; }

        [Required]
        [Display(Name = "Role")]
        public string EmployeeType { get; set; }

        [Display(Name = "Details")]
        public string EmployeeDetails { get; set; }

        [Required]
        public Nullable<double> Bonus { get; set; }


        [Required]
        [Display(Name = "Date")]
        public Nullable<System.DateTime> BonusDate { get; set; }
        public string BonusReason { get; set; }
        public Nullable<double> Deduction { get; set; }


        [Required]
        [Display(Name = "Date")]
        public Nullable<System.DateTime> DeductionDate { get; set; }
        public string DeductionReason { get; set; }
    }
}
