using Model.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model.SongModel
{
    public class Mark
    {
        public int ID { get; set; }

        [Range(1,5)]
        public int Value { get; set; }

        public User User{ get; set; }
    }
}
