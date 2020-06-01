using Model.SongModel;
using Model.UserModel;
using Services.DTOs;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ISongService : IBaseEntityService<Song>
    {
        Task<ServiceResultWithModel<Song>> GetSongWithTabs(int songId);

        Task<ServiceResultWithModel<Song>> AddSong(SongDTO songModel, User user);

        Task<ServiceResult> AddComment(int songId, string text, User user);

        Task<ServiceResult> PostMark(int songId, int value, User user);
    }
}
