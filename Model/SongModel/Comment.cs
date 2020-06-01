using Model.UserModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Model.SongModel
{
    public class Comment
    {
        public int ID { get; set; }

        public string Text { get; set; }

        public User Creator { get; set; }

    }
}
