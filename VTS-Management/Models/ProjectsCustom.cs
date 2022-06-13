using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace VTS_Management.Models
{
    [MetadataType(typeof(ProjectMetadata))]
    public partial class Project
    {
    }
    public class ProjectMetadata
    {
        [Display(Name ="ID")]
        public int ProjectId { get; set; }

        [Display(Name = "Name")]
        [Required]
        public string ProjectName { get; set; }

        [Display(Name = "Type")]
        [Required]
        public string ProjectType { get; set; }

        [Display(Name = "Employee")]
        [Required]
        public string ProjectEmployee { get; set; }

        [Display(Name = "Cost")]
        [Required]
        public Nullable<double> ProjectCost { get; set; }

        [Display(Name = "Profit")]
        [Required]
        public Nullable<double> ProjectProfit { get; set; }

        [Display(Name = "Customer")]
        [Required]
        public string ProjectCustomer { get; set; }

        [Display(Name = "Sales")]
         public Nullable<decimal> ProjectSales { get; set; }
    }
}