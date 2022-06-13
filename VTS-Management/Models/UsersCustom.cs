using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace VTS_Management.Models
{
    [MetadataType(typeof(UserMetadata))]
    public partial class User
    {

    }
    public partial class UserMetadata
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        [Required]
        [Display (Name="Email")]
        public string UserEmail { get; set; }
        [Required]
        [Display(Name = "Password")]
        public string UserPassword { get; set; }
        public string UserType { get; set; }
    }
}