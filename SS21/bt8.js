for (var i = 1; i < 10; ++i) 
    {
      for (var j = 0; j < 10; ++j) 
        {
           for (var k = 0; k < 10; ++k)
           {
             var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
             var plus = (i * 100 + j * 10 +  k);
             if (pow == plus) 
              {     
                document.write(`Số ${pow} là số Aram`);
               }
            }
          }
       }
  