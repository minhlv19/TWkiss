import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {Card} from 'react-native-elements';

class Main extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#00BCD4', height: 40, justifyContent: 'center'}}>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
            <Image source={require('../../asset/images/profile.png')} style={{width: 30, height: 30, marginLeft: 10}}/>
            </TouchableOpacity>
            <Text style={{flex: 3, textAlign: 'center'}}>VClass</Text>
           <TouchableOpacity>
            <Image source={require('../../asset/images/notification.png')} style={{marginRight: 10}}/>
           </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.list1}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
            >
              <View style={styles.SingleRow}>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/attendance.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Điểm danh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/QRCode.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>QR check-in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/diary.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Nhật ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Food.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Thực đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Star.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Ngôi sao </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Potty.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Vệ sinh</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
          <View style={styles.list1}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
            >
              <View style={styles.SingleRow}>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/PlayandLearn.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Sức khỏe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Observation.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Quan sát</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Photots.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Hình ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/PlayandLearn.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Học và chơi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Sleep.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Ngủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/video.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Video</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
          <View>
            <View style={styles.View1}>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/Notice.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1}>Ghi chú</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/calender.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1}>Lịch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/Parent.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1} numberOfLines={1}>Ghi chú phụ huynh</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/RouteTracker.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1} numberOfLines={1}>Theo dõi lộ trình</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.View1}>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/Dailyreport.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1} numberOfLines={1}>Báo cáo theo ngày</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/History.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1}>Lịch sử</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/invoices.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1}>Hóa đơn</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageSinglerow1}>
                <Image source={require('../../asset/images/AddNote.png')} style={styles.SingleRowImage1}/>
                <Text style={styles.titleSinglerow1}>Thắc mắc</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 20, marginBottom: 10}}>
            <View style={{flexDirection: 'row', marginBottom: 10, marginLeft: 10}}>
              <Image source={require('../../asset/images/settingsetup.png')}
                     style={{width: 20, height: 20, marginRight: 6}}/>
              <Text>Setup & Setting</Text>
            </View>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
            >
              <View style={styles.SingleRow}>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Admin.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Admin tool</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Expense.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Chi phí</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Child_profile.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow} numberOfLines={1}>Hồ sơ trẻ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Staff_profile.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow} numberOfLines={1}>Hồ sơ GV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Programs_profile.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow} numberOfLines={1}>Chương trình</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/School_profile.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Trường học</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/refresh.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow} numberOfLines={1}>Làm mới tài khoản</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/changepw.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Đổi mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/logout.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View>
            <View style={{flexDirection: 'row', marginBottom: 10, marginLeft: 10}}>
              <Image source={require('../../asset/images/helpcenter.png')}
                     style={{width: 20, height: 20, marginRight: 6}}/>
              <Text>Help Center</Text>
            </View>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
            >
              <View style={styles.SingleRow}>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Whatnew.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Có gi mới</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/Faq.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow} numberOfLines={1}>Câu hỏi thường gặp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/videos.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/support.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Hỗ trợ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/feedback.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/share.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Share the App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageSinglerow}>
                  <Image source={require('../../asset/images/rate.png')} style={styles.SingleRowImage}/>
                  <Text style={styles.titleSinglerow}>Đánh giá</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list1: {
    width: '97%',
    height: 70,
    borderWidth: 0.1,
    marginTop: 6,

    marginLeft: 6,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  SingleRow: {
    flexDirection: 'row',
  },
  imageSinglerow: {
    justifyContent: 'center',
    width: 86,
    alignItems: 'center',
  },
  titleSinglerow: {
    fontSize: 13,
    marginTop: 4,
  },
  SingleRowImage: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 50,
  },
  View1: {
    flexDirection: 'row',
    height: 86,
  },
  imageSinglerow1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 0.2,
  },
  SingleRowImage1: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 50,
  },
  titleSinglerow1: {
    fontSize: 13,
    marginTop: 4,
  },

});


export default Main;
