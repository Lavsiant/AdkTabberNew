using Model.TabModel;
using Model.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model.SongModel
{
    public class Song
    {

        public Song()
        {
            Comments = new List<Comment>();
            Marks = new List<Mark>();
        }

        [Key]
        public int ID { get; set; }

        public string Name { get; set; }

        public string Band { get; set; }

        public int Tempo { get; set; }

        public DifficultyType Difficulty { get; set; }

        public List<Tab> Tabs { get; set; }

        public User Creator { get; set; }

        public List<Comment> Comments { get; set; }

        public List<Mark> Marks { get; set; }
    }
}
