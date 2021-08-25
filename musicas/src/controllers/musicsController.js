const musics = require("../models/musicsBD.js") // arquivo de ligacão


const getAllMusics = (req, res) => {

     musics.find((err,musicFound) => {
         if(err) {
             res.status(500).send({"message": err.message})
         } else {
             if(musicFound && musicFound.length > 0 ) {
                 res.status(200).send(musicsFound)
             } else {
                 res.status(204).send({"message": "Nenhuma música encontrada"})
             }
         } 
     })
   
}



const createMusic = (req, res) => {
    let { id, title, duration, launchYear, favorited, artists } = req.body

    let createSong = {"id": Math.random().toString(32).substr(2),
        title, 
        duration,
        launchYear,
        favortited,
        artists}

    let newMusic = new musics(createSong) // guardar a nova musica que vamos receber
    newMusic.save(
     function (err) {
         if (err) {
             res.status(500).send({"message": err.message})
         } else {
             musics.updateOne({$set:{createSong}})
             res.status(200).send({"message": "Música criada com sucesso!"})
         }
     } 

    )      

    
}

const deleteMusic = (req, res) => {
    
        const musicId = req.params.id

        musics.findOne({id:musicId}, function (err, music)
        {
            if(err) {
                res.status(500).send({"message": err.message})
             } else {
                if(music) {
                    musics.deleteOne({id: musicId}, function (err){
                        if (err) {
                            res.status(500).send({"message": err.message, status: "FAIL"})
                        } else{
                            res.status(200).send({"message": "Música deletada com sucesso!", status: "SUCESS"})
                        }
                    } )
                } else {
                    res.status(400).send({"message": "Não há música com esse ID"})
                }

            } 
            
    
        })

    }


const updateMusic = (req, res) => {

       const musicId = req.params.id
       musics.findOne({id: musicId}, function (err, musicFound){
           if(err) {
               res.status(500).send({"message": err.message}) 

           } else {
               if(musicFound) {
                   musics.updateOne({id: musicId}, {$set: req.body}, function (err){
                       if(err){
                           res.status(500).send({"message": err.message})
                       } else {
                           res.status(200).send({"message": "Música atualizada com sucesso!"})
                       }
                   })
               } else {
                   res.status(404).send({"message": "Música não encontrada"})
               }
           }

       })
    }


const updateFavorited = (req, res) => {
     
        const musicId = req.params.id
        let favorited = req.body.favorited
        musics.findOne({id: musicId}, function (err,favoriteMusic){
            if(err) {
                res.status(500).send({"message": err.message})
            } else {
                if(favoriteMusic) {
                    musics.updateOne({id: musicId}, {$set: {favorited: newFavorited}}, function (err){
                        if(err) {
                            res.status(500).send({"message": err.message})
                        } else {
                            res.status(200).send({"message": "Favorito alterado com sucesso!"})
                        }
                    })
                } else {
                    res.status(404).send({"message": "Favorito não encontrado"})
                }
            }
        })
        
}








module.exports = {
    createMusic,
    deleteMusic,
    updateFavorited,
    updateMusic,
    getAllMusics,
    
}