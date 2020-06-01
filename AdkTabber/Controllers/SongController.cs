using AdkTabber.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Model.SongModel;
using Model.UserModel;
using Services.DTOs;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdkTabber.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ISongService _songService;
        private readonly UserManager<User> _userManager;

        public SongController(ISongService songService, UserManager<User> userManager)
        {
            _userManager = userManager;
            _songService = songService;
        }

        [HttpGet]
        [Route("get")]
        public async Task<ActionResult<Song>> GetSongById(int id)
        {
            var result = await _songService.GetSongWithTabs(id);
            if (result.Succeeded)
            {
                return result.Model;
            }
            return BadRequest(result.Model);
        }

        [HttpGet]
        [Route("all")]
        public async Task<ActionResult<List<Song>>> GetAllSongs()
        {
            var result = await _songService.GetAllAsync();
            if (result.Succeeded)
            {
                return result.Model.ToList();
            }
            return BadRequest(result.Model);
        }

        [HttpPost]
        [Route("сreate")]
        public async Task<ActionResult<Song>> CreateSong(SongCreateViewModel model)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            var result = await _songService.AddSong(_mapper.Map<SongDTO>(model), user);
            return result.Succeeded ? (ActionResult)Ok(result.Model) : BadRequest(result.Error);
        }

        [HttpPost]
        [Route("comment")]
        public async Task<ActionResult<Song>> AddComment(CommentViewModel model)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            var result = await _songService.AddComment(model.SongId, model.Text, user);
            return result.Succeeded ? (ActionResult)Ok() : BadRequest(result.Error);
        }

        [HttpPost]
        [Route("mark")]
        public async Task<ActionResult<Song>> PostMark(MarkViewModel model)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            var result = await _songService.PostMark(model.SongId, model.Value, user);
            return result.Succeeded ? (ActionResult)Ok() : BadRequest(result.Error);
        }

    }
}
