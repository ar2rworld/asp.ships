using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiWithReact.Server.Models;

namespace WebApiWithReact.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ShipsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Ships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ship>>> GetShips()
        {
            return await _context.Ships.ToListAsync();
        }

        // GET: api/Ships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ship>> GetShip(int id)
        {
            var ship = await _context.Ships.FindAsync(id);

            if (ship == null)
            {
                return NotFound();
            }

            return ship;
        }

        // PUT: api/Ships/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShip(int id, Ship ship)
        {
            if (id != ship.Id)
            {
                return BadRequest();
            }

            _context.Entry(ship).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ships
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ship>> PostShip(Ship ship)
        {
            _context.Ships.Add(ship);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShip", new { id = ship.Id }, ship);
        }

        // DELETE: api/Ships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShip(int id)
        {
            var ship = await _context.Ships.FindAsync(id);
            if (ship == null)
            {
                return NotFound();
            }

            _context.Ships.Remove(ship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShipExists(int id)
        {
            return _context.Ships.Any(e => e.Id == id);
        }
    }
}
