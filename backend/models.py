# This class is for KTP data representation.
class KTPData:
    def __init__(self, nik: str, name: str, placeOfBirth: str, dateOfBirth: str, gender: str, address: str, religion: str, maritalStatus: str, occupation: str, citizenship: str):
        self.nik = nik
        self.name = name
        self.placeOfBirth = placeOfBirth
        self.dateOfBirth = dateOfBirth
        self.gender = gender
        self.address = address
        self.religion = religion
        self.maritalStatus = maritalStatus
        self.occupation = occupation
        self.citizenship = citizenship