using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model.TabModel
{
    public class ConcreteNote
    {
        [Key]
        public int ID { get; set; }

        public NoteType Note { get; set; }

        public OctaveType Octave { get; set; }
    }
}
