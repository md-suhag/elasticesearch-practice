import { Client } from "@elastic/elasticsearch";

const client = new Client({
  node: "http://localhost:9200",
});

async function main() {
  const response = await client.info();

  //   console.log(response);

  //   await client.indices.create({
  //     index: "products",
  //   });

  //   await client.index({
  //     index: "products",
  //     id: "1",
  //     document: {
  //       title: "iPhone 15 Pro",
  //       description: "Apple smartphone with A17 Pro chip",
  //       price: 999,
  //       category: "smartphones",
  //     },
  //   });
  //   await client.index({
  //   index: 'products',
  //   id: '2',
  //   document: {
  //     title: 'Samsung Galaxy S25',
  //     description: 'Samsung flagship Android smartphone',
  //     price: 899,
  //     category: 'smartphones',
  //   },
  // });

  //   const result = await client.get({
  //     index: "products",
  //     id: "1",
  //   });

  //   console.log(result);

  //   const result = await client.search({
  //     index: "products",
  //     query: {
  //       match: {
  //         title: "ipho",
  //       },
  //     },
  //   });

  //   console.log(result.hits.hits);

  //   const result2 = await client.search({
  //     index: "products",
  //     query: {
  //       term: {
  //         category: "smartphone",
  //       },
  //     },
  //   });

  //   console.log(result2.hits.hits);

  //   const result3 = await client.search({
  //     index: "products",
  //     query: {
  //       multi_match: {
  //         query: "iphone",
  //         fields: ["title", "description"],
  //       },
  //     },
  //   });

  //   console.log(result3.hits.hits);

  //   const result4 = await client.search({
  //     index: "products",
  //     query: {
  //       bool: {
  //         must: [
  //           {
  //             match: {
  //               title: "iphone",
  //             },
  //           },
  //         ],
  //         filter: [
  //           {
  //             term: {
  //               category: "smartphones",
  //             },
  //           },
  //           {
  //             range: {
  //               price: {
  //                 gte: 800,
  //                 lte: 11000,
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  //   console.log(result4.hits.hits);

  //   const result = await client.indices.analyze({
  //     analyzer: "standard",
  //     text: "iPhone 15 Pro Max",
  //   });

  //   console.log(result.tokens);

  const result = await client.search({
    index: "products",
    query: {
      match: {
        title: {
          query: "iphnoe",
          fuzziness: "AUTO",
        },
      },
    },
  });

  console.log(result.hits.hits);
  //   const products = [
  //     { id: "1", title: "iPhone 15 Prov", price: 999, category: "smartphones" },
  //     { id: "2", title: "iPhone 15", price: 799, category: "smartphones" },
  //     { id: "3", title: "iPhone 16 Pro", price: 1099, category: "smartphones" },
  //     {
  //       id: "4",
  //       title: "Samsung Galaxy S25",
  //       price: 899,
  //       category: "smartphones",
  //     },
  //     { id: "5", title: "Google Pixel 10", price: 799, category: "smartphones" },
  //   ];

  //   await client.bulk({
  //     operations: products.flatMap((product) => [
  //       { index: { _index: "products", _id: product.id } },
  //       product,
  //     ]),
  //   });

  //   console.log("5 products created");
}

main().catch(console.error);
