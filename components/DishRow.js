import { Image, Text, TouchableOpacity, View } from 'react-native'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItemsWithId, removeFromBasket } from '../features/basketSlice';

const DishRow = ({
    id,
    name,
    description,
    image,
    price,
}) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector(state => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, image, price, image }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }))

    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>

                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={price} currency="GBP" />
                        </Text>
                    </View>

                    <View>
                        <Image style={{ borderWidth: 1, borderColor: '#f3f3f4' }} source={{ uri: urlFor(image).url() }} className="h-20 w-20 bg-gray-300 p-4" />
                    </View>
                </View>
            </TouchableOpacity>

            {
                isPressed && (
                    <View className="bg-white px-4">
                        <View className="flex-row items-center space-x-2 pb-3">
                            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                                <MinusCircleIcon color={items.length > 0 ? "#00ccbb" : "gray" } size={40} />
                            </TouchableOpacity>

                            <Text>{items.length}</Text>

                            <TouchableOpacity onPress={addItemToBasket}>
                                <PlusCircleIcon size={40} color="#00ccbb" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default DishRow