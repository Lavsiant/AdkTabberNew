using DbRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Model.SongModel;
using Model.TabModel;
using Model.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbRepository.Repositories
{
    public class SongRepository : BaseRepository<Song>, ISongRepository
    {
        public SongRepository(DataContext context) : base(context) { }


        public async Task<Song> GetSongWithTabs(int songId)
        {
            var song = await _context.Songs.Include(x => x.Tabs)
                .Include(x => x.Marks)
                .Include(x => x.Comments)
                .Include(x => x.Creator)
                .FirstOrDefaultAsync(x => x.ID == songId);
            foreach (var tab in song.Tabs)
            {
                switch (tab.Type)
                {
                    case TabType.Guitar:
                        ((GuitarTab)tab).Iterations = _context.GuitarTabs.Include(x => x.Iterations).First(x => x.ID == tab.ID).Iterations;
                        break;
                    case TabType.Drums:
                        ((DrumTab)tab).Iterations = _context.DrumTabs.Include(x => x.Iterations).First(x => x.ID == tab.ID).Iterations;
                        break;
                    case TabType.Piano:
                        ((PianoTab)tab).Iterations = _context.PianoTabs.Include(x => x.Iterations).First(x => x.ID == tab.ID).Iterations;
                        break;
                }
            }
            return song;
        }

        public async Task PostMark(Mark mark, int songId)
        {
            var song = _context.Songs.Include(x=>x.Marks).First(x => x.ID == songId);
            song.Marks.Add(mark);
            _context.Update(song);
            await _context.SaveChangesAsync();
            
        }
        public async Task AddComment(Comment comment, int songId)
        {
            var song = _context.Songs.Include(x => x.Comments).First(x => x.ID == songId);
            song.Comments.Add(comment);
            _context.Update(song);
            await _context.SaveChangesAsync();
        }
    }
}
