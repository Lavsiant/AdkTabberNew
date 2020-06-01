using DbRepository.Repositories;
using Model.SongModel;
using Model.UserModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DbRepository.Interfaces
{
    public interface ISongRepository : IBaseRepository<Song>
    {
        public Task<Song> GetSongWithTabs(int songId);

        Task AddComment(Comment comment, int songId);

        Task PostMark(Mark mark, int songId);
    }
}
