using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace VTS_Management.Models
{
    [MetadataType(typeof(CustomerMetadata))]
    public partial class Customer
    {
    }
    public class CustomerMetadata {
        [Display(Name = "ID")]
        public int CustomerId { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string CustomerName { get; set; }

        [Display(Name = "Email")]
        public string CustomerEmail { get; set; }


        [Required]
        [Display(Name = "Phone")]
        public Nullable<decimal> CustomerPhone { get; set; }

        [Required]
        [Display(Name = "Projects")]
        public string CustomerProject { get; set; }

        [Display(Name = "Details")]
        public string CustomerDetails { get; set; }
    }

}