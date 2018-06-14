using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webapp_LAB4.Models
{
    public class QuestionClass
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string CorrectAwser { get; set; }
        public string WrongAwser1 { get; set; }
        public string WrongAwser2 { get; set; }
        public string WrongAwser3 { get; set; }

    }
    public class UserClass
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int Highscore { get; set; }

    }
}
