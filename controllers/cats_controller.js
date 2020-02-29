const connection = require('../config/connection');

const getCats = () => {
    return new Promise((reslove, reject) => {
        connection.query('SELECT * FROM cats', (err, catdata) => {
            if (err) {
                consola.error(err);
                return reject(err);

            }
            resolve({ catdata });

        })
    });
};

    const createCat = catObj => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO items SET ?', catObj, (err, catdata) => {
                if (err) {
                    consola.error(err);
                    return reject(err);

                }
                resolve({ catdata });
            });

        });
    };

    const updateCat = (catObj, catId) => {
        return new Promise((resolve, reject) => {
          
          connection.query(
            'UPDATE items SET ? WHERE ?',
            [catObj,catId],
            (err, catdata) => {
              if (err) {
                consola.error(err);
                reject(err);
                return;
              }
              resolve({ message: 'cat updated' });
            }
          );
      
        
        });
      };
const deleteCat= (catId) => {
    return new Promise((resolve, reject) => {
    connection.query( 'DELETE FROM cats  WHERE  id = ?',[catId],
(err, catdata) => {
            if (err) {
              console.log(err);
              reject(err);
              return;
            }
            resolve({ catdata});
          }
        );
    
      
      });
};

module.exports = {getCats,updateCat,createCat,deleteCat};
