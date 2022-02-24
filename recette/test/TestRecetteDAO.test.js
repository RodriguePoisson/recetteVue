const RecetteDAO = require('../src/DAO/RecetteDAO.js')

test("Liste des recettes",()=>{
    let dao = new RecetteDAO()

    expect(dao.getRecettestoString()).toBe('[{"title":"nouveau titre","content":"je suis pluis le content"},{"title":"sqdsqd,content:sqdqsdsq"}]')
})