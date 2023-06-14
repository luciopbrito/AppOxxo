import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  Image,
  HStack,
  VStack,
} from "native-base";
import { Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { RouteProp, useNavigation } from "@react-navigation/native";
import useAuth from "../../contexts/Auth";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RoutesClientList } from "../../routes/routes.client";
import styles from "./styles";
import { ProductService, Product } from "../../services/products";
import { usePopup } from "../../services/popups";
import { Ionicons } from "@expo/vector-icons";
import Subtitle from "../../components/Subtitle";
// import Title from "../../components/Title";

export type ProdutosScreenParams = {};

type ProdutosScreenStateProp = {
  products: Product[] | null;
  listProducts: ListProducts[];
  isOpenListProduct: boolean;
};

type ListProducts = {
  product: Product;
  quantity: number;
};

type ProdutosScreenNavigationProp = DrawerNavigationProp<
  RoutesClientList,
  "ProdutosScreen"
>;

type ProdutosScreenRouteProp = RouteProp<RoutesClientList, "ProdutosScreen">;

const ProdutosScreen: React.FC<ProdutosScreenParams> = () => {
  // contexto
  const { user } = useAuth();
  const [state, setState] = useState<ProdutosScreenStateProp>({
    products: [],
    listProducts: [] as ListProducts[],
    isOpenListProduct: false,
  });
  const navigation = useNavigation<ProdutosScreenNavigationProp>();

  const getProducts = async () => {
    var products = await ProductService.getAllProducts();
    products
      ? setState((prevState) => {
        return { ...prevState, products: products };
      })
      : null;
  };

  const addProductsList = (produto: Product) => {
    const list: ListProducts[] = state.listProducts;
    let entrou = 0;
    list.forEach((element) => {
      if (element.product.Id_Product == produto.Id_Product) {
        element.quantity = element.quantity + 1;
        entrou = entrou + 1;
      }
    });

    if (entrou == 0) {
      list.push({
        product: produto,
        quantity: 1,
      } as ListProducts);
    }

    setState((prevState) => {
      return {
        ...prevState,
        listProducts: list,
      };
    });
  };

  const handleListProduct = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isOpenListProduct: !prevState.isOpenListProduct,
      };
    });
  };

  const handleAddQuantity = (indexListProduct: number) => {
    let list = state.listProducts;
    list[indexListProduct].quantity = list[indexListProduct].quantity + 1;

    setState((prevState) => {
      return {
        ...prevState,
        listProducts: list,
      };
    });

    console.log("mais: ", list[indexListProduct].quantity);
  };

  const handleDeleteQuantity = (indexListProduct: number) => {
    let list = state.listProducts;

    if (list[indexListProduct].quantity >= 1) {
      list[indexListProduct].quantity = list[indexListProduct].quantity - 1;
    }

    if (list[indexListProduct].quantity === 0) {
      list.splice(indexListProduct, 1);
    }


    setState((prevState) => {
      return {
        ...prevState,
        listProducts: list,
      };
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <NativeBaseProvider>
      <Box flex="1" safeArea>
        <Header navigation={navigation} type={"full"} />
        <Box style={styles.container}>
          <ScrollView>
            <Box style={styles.containerProduto}>
              {state.products?.map((item) => {
                return (
                  <Produto
                    item={item}
                    addProductsList={addProductsList}
                    key={item.Id_Product}
                  />
                );
              })}
            </Box>
          </ScrollView>
        </Box>
        <Box
          style={[
            styles.listProducts,
            {
              display: state.listProducts.length < 1 ? "none" : "flex",
              height: state.isOpenListProduct ? "80%" : "10%",
            },
          ]}
        >
          {state.isOpenListProduct == false ? (
            <HStack
              space={10}
              padding={5}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100%"}
            >
              <Text color={"#fff"}>
                Produtos Selecionados: {state.listProducts.length}
              </Text>
              <Button
                onPress={() => handleListProduct()}
                title={"Ver produtos"}
              />
            </HStack>
          ) : (
            <ScrollView>
              <Ionicons
                onPress={() => {
                  handleListProduct();
                }}
                name="close"
                size={40}
                color={"#fff"}
                style={{ padding: 5 }}
              />
              <VStack space={5}>
                {state.listProducts.map((element, index) => {
                  return (
                    <Box key={index} alignItems={"center"}>
                      <HStack
                        space={10}
                        backgroundColor={"#fff"}
                        padding={5}
                        w={"90%"}
                        borderRadius={10}
                      >
                        <Image
                          source={{ uri: element.product.Uri }}
                          alt="image"
                          size="xl"
                        />
                        <VStack
                          space={2}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Subtitle>{element.product.Name_Product}</Subtitle>
                          <Text>Quantidade: {element.quantity}</Text>
                          <HStack space={5}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => handleAddQuantity(index)}
                            >
                              <Ionicons name="add" size={30} color={"#fff"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => handleDeleteQuantity(index)}
                            >
                              <Ionicons
                                name="remove"
                                size={30}
                                color={"#fff"}
                              />
                            </TouchableOpacity>
                          </HStack>
                        </VStack>
                      </HStack>
                    </Box>
                  );
                })}
                <HStack justifyContent={"center"}>
                  <Button
                    onPress={() => navigation.navigate("QrCodeScreen")}
                    title={"Finalizar Compra"}
                  />
                </HStack>
              </VStack>
            </ScrollView>
          )}
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

interface ProdutoProps {
  item: Product;
  addProductsList: (value: Product) => void;
}

const Produto: React.FC<ProdutoProps> = ({ item, addProductsList }) => {
  const modalProduto = async (item: Product) => {
    var produto = item;
    usePopup.messageOptions(
      `${produto.Name_Product}, ${produto.Price.toString().replace(
        ".",
        ","
      )} Reais`,
      "Deseja adicionar no carrinho?",
      [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => addProductsList(produto),
        },
      ]
    );
  };

  return (
    <Box style={styles.boxProduto}>
      <Image source={{ uri: item.Uri }} alt="image" size="xl" />
      <Text style={styles.titleProduto}>{item.Name_Product}</Text>
      <Box>
        <Button
          color="#FBB110"
          title="Comprar"
          onPress={() => {
            modalProduto(item);
          }}
        />
      </Box>
    </Box>
  );
};

export default ProdutosScreen;
