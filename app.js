

BEGIN
//  computes the dot product of two equal length integer vectors            
//  (single dimension arrays ) the length of the vectors must be specified in length
//                                                              
//  integer procedure integerDotProduct( integer array a ( * )
//                                        ; integer array b ( * )
//                                        ; integer value length
//                                        ) ;
BEGIN
//         integer product;
//         product := 0;
//         for i := 1 until length do product := product + ( a(i) * b(i) );
//         product
 //        integerDotProduct ;
END
//     declare two vectors of length 3                                         %
//     integer array v1, v2 ( 1 :: 3 );
//     initialise the vectors                                                  %
//     v1(1) :=  1; v1(2) :=  3; v1(3) := -5;
//     v2(1) :=  4; v2(2) := -2; v2(3) := -1;
//     output the dot product                                                  %
//     write( integerDotProduct( v1, v2, 3 ) )
END


let vectors = [
  [7, 1, 1],
  [6, 0, 2],
  [5, 7, 0],
  [3, 1, 2],
  [2, 3, 8],
  [0, 0, 0],
];



Function; dotProduct(vector1, vector2) {
BEGIN
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}

for (let i = 0; i < vectors.length; i++) {
  for (let j = i + 1; j < vectors.length; j++) {
    if (dotProduct(vectors[i], vectors[j]) === 0) {
      console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `);
    }
  }
}
END
